import "./HomePage.css";
import {FaSearch, FaAngleDown} from "react-icons/fa";
import {MdOutlineSportsSoccer} from "react-icons/md";
// import bigImg from "../assets/carousel1.png";
import {useEffect, useState} from "react";
import HomeContentsCenter from "./HomeContentsCenter";
import HomeOdds from "./HomeOdds";
import {useSelector, useDispatch} from "react-redux";
import HomeHeader from "../HomeHeader/HomeHeader";
import {clearSlip, removeSingle} from "../Redux/Features";
import axios from "axios"

const HomeContents = () => {
    const [showFan, setShowFan] = useState(false);
    const [showChelseaFan, setShowChelseaFan] = useState(false);
    const [showBarcaFan, setShowBarcaFan] = useState(false)
    const [showCityFan, setShowCityFan] = useState(false)
    const [showMadridFan, setShowMadridFan] = useState(false)
    const [showArsenalFan, setShowArsenalFan] = useState(false)
    const [showManUFan, setShowManUFan] = useState(false)
    const [showPoolFan, setShowPoolFan] = useState(false)
    const [showFanPick, setShowFanPick] = useState(true);
    console.log(showFanPick); 
    const dispatch = useDispatch();

    const handleShowFanDrop = () => {
        setShowFan(!showFan);
    };
    const handleShowFanPick = () => {
        setShowFanPick(true);
        setShowChelseaFan(false);
        setShowBarcaFan(false)
        setShowCityFan(false)
        setShowMadridFan(false)
        setShowArsenalFan(false)
        setShowManUFan(false)
        setShowPoolFan(false)
    };
    const handleShowChelseaFan = () => {
        setShowChelseaFan(true);
        setShowFanPick(false);
        setShowBarcaFan(false)
        setShowCityFan(false)
        setShowMadridFan(false)
        setShowArsenalFan(false)
        setShowManUFan(false)
        setShowPoolFan(false)
    };
    const handleShowBarcaFan = () => {
        setShowChelseaFan(false);
        setShowFanPick(false);
        setShowBarcaFan(true)
        setShowCityFan(false)
        setShowMadridFan(false)
        setShowArsenalFan(false)
        setShowManUFan(false)
        setShowPoolFan(false)
    };
    const handleShowCityFan = () => {
        setShowChelseaFan(false);
        setShowFanPick(false);
        setShowBarcaFan(false)
        setShowCityFan(true)
        setShowMadridFan(false)
        setShowArsenalFan(false)
        setShowManUFan(false)
        setShowPoolFan(false)
    };
    const handleShowMadridFan = () => {
        setShowChelseaFan(false);
        setShowFanPick(false);
        setShowBarcaFan(false)
        setShowCityFan(false)
        setShowMadridFan(true)
        setShowArsenalFan(false)
        setShowManUFan(false)
        setShowPoolFan(false)
    };
    const handleShowManUFan = () => {
        setShowChelseaFan(false);
        setShowFanPick(false);
        setShowBarcaFan(false)
        setShowCityFan(false)
        setShowMadridFan(false)
        setShowArsenalFan(false)
        setShowManUFan(true)
        setShowPoolFan(false)
    };
    const handleShowArsenalFan = () => {
        setShowChelseaFan(false);
        setShowFanPick(false);
        setShowBarcaFan(false)
        setShowCityFan(false)
        setShowMadridFan(false)
        setShowArsenalFan(true)
        setShowManUFan(false)
        setShowPoolFan(false)
    };
    const handleShowPoolFan = () => {
        setShowChelseaFan(false);
        setShowFanPick(false);
        setShowBarcaFan(false)
        setShowCityFan(false)
        setShowMadridFan(false)
        setShowArsenalFan(false)
        setShowManUFan(false)
        setShowPoolFan(true)
    };

    const [mainContentA, setMainContentA] = useState(true);
    const [mainContentB, setMainContentB] = useState(false);

    const showMainContentA = () => {
        setMainContentA(true);
        setMainContentB(false);
    };
    const showMainContentB = () => {
        setMainContentA(false);
        setMainContentB(true);
    };

    const betslipData = useSelector((state) => state.Pier.slip);
    // console.log("BetSlip", betslipData);

    // const betslipData = useSelector((state) => state.Pier.slip);

    // const handleShowHome = () => {
    //     setShowBetslip(false);
    //     ShowFanPicksA(false);
    //     nav("/home");
    // };

    // const [showBetslip, setShowBetslip] = useState(false);

    // const handleSHowBetslip = () => {
    //     setShowBetslip(!showBetslip);
    // };

    const handleRemoveItem = (bettor) => {
        dispatch(removeSingle({bettor}));
    };

    const [stakeAmounts, setStakeAmounts] = useState({});

    const handleStakeChange = (bettor, value) => {
        setStakeAmounts((prevAmounts) => ({
            ...prevAmounts,
            [bettor]: value,
        }));
    };

    const calculateTotalStake = () => {
        return betslipData.reduce(
            (total, item) => total + parseFloat(stakeAmounts[item.bettor] || 0),
            0
        );
    };

    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
        // Fetch the current exchange rate from an API (replace with a reliable API)
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((response) => {
                const rate = response.data.bpi.USD.rate.replace(",", ""); // assuming USD rate
                setExchangeRate(parseFloat(rate));
            })
            .catch((error) => {
                console.error("Error fetching exchange rate:", error);
            });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    const stakeValueBTC = calculateTotalStake() / exchangeRate;
    const roundedTotalBTCStake = parseFloat(stakeValueBTC.toFixed(8));
    // console.log("Total BTC:",roundedTotalBTCStake);

    const calculateBTCValue = (bettor) => {
        const stakeValueBTC =
            (parseFloat(stakeAmounts[bettor]) || 0) / exchangeRate;
        return parseFloat(stakeValueBTC.toFixed(8));
    };

    const calculateTotalReturns = () => {
        return betslipData.reduce(
            (totalReturns, item) =>
                totalReturns +
                item.stake * parseFloat(stakeAmounts[item.bettor] || 0),
            0
        );
    };
    const totalReturnBTC = calculateTotalReturns() / exchangeRate;
    const roundedTotalReturn = parseFloat(totalReturnBTC.toFixed(8));


    return (
        <>
            <HomeHeader
                handleChelseaFan={handleShowChelseaFan}
                handlePoolFan={handleShowPoolFan}
                handleArsenalFan={handleShowArsenalFan}
                handleBarcaFan={handleShowBarcaFan}
                handleManUFan={handleShowManUFan}
                handleCityFan={handleShowCityFan}
                handleMadridFan={handleShowMadridFan}
                ShowMainContentB={showMainContentB}
                ShowFanPicksA={handleShowFanPick}
            />
            <div className="HomeMainContents">
                <div className="HomeMainContentsA">
                    <div className="HomeMainContentsASearch">
                        <input type="text" placeholder="Search for a team" />
                        <FaSearch className="FaSearch" />
                    </div>
                    <div className="HomeMainContentsALinks">
                        <div
                            className="HomeMainContentsALinksItem"
                            onClick={handleShowFanPick}
                        >
                            <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                            <p>UEFA Champions League</p>
                        </div>
                        <div className="HomeMainContentsALinksItem">
                            <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                            <p>UEFA Europa League</p>
                        </div>
                        <div className="HomeMainContentsALinksItem">
                            <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                            <p>Premier League</p>
                        </div>
                        <div className="HomeMainContentsALinksItem">
                            <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                            <p>Italy Seria A</p>
                        </div>
                        <div className="HomeMainContentsALinksItem">
                            <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                            <p>German Bundesliga</p>
                        </div>
                        <div className="HomeMainContentsALinksItem">
                            <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                            <p>Franch League</p>
                        </div>

                        <div className="HomeMainContentsALinksItemFan">
                            <div
                                className="HomeMainContentsALinksItemP"
                                onClick={handleShowFanDrop}
                            >
                                <p>View Fan Page</p>
                                <FaAngleDown />
                            </div>
                            <div
                                className={`HomeMainContentsALinksItemFP ${
                                    showFan ? "show" : ""
                                }`}
                            >
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowChelseaFan}
                                >
                                    Chelsea
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowBarcaFan}
                                >
                                    Barcelona
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowMadridFan}
                                >
                                    Real Madrid
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowManUFan}
                                >
                                    Manchester United
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowPoolFan}
                                >
                                    Liverpool
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowArsenalFan}
                                >
                                    Arsenal
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowCityFan}
                                >
                                    Man City
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {mainContentA ? (
                    <HomeContentsCenter
                        showChelseaFan={showChelseaFan}
                        showPoolFan={showPoolFan}
                        showArsenalFan={showArsenalFan}
                        showBarcaFan={showBarcaFan}
                        showManUFan={showManUFan}
                        showCityFan={showCityFan}
                        showMadridFan={showMadridFan}
                        ShowMainContentB={showMainContentB}
                        ShowFanPicksA={handleShowFanPick}
                    />
                ) : mainContentB ? (
                    <HomeOdds ShowMainContentA={showMainContentA} />
                ) : null}

                <div className="HomeMainContentsCSlip">
                    {/* <div className="HomeMainContentsCSlipA">
                        <h4>Betslip {betslipData.length}</h4>
                    </div>
                    <div className="HomeMainContentsCSlipB">
                        <p>Accept odds changes</p>
                        <p onClick={() => dispatch(clearSlip())} style={{cursor:'pointer', background:'red', padding:'3px', borderRadius:'3px'}}>Clear Betslip</p>
                    </div>
                    <div className="HomeMainContentsCSlipItems">
                        {betslipData.length === 0 ? (
                            <>
                                {" "}
                                <h3>Empty slip, Please select a odds from the fan page</h3>
                            </>
                        ) : (
                            <>
                            {
                                betslipData.map((item, index)=>(
                                    <div className="HomeMainContentsCSlipItems1" key={index}>
                                    <div className="HomeMainContentsCSlipItem1Name">
                                        <input type="checkbox" />
                                        <div className="HomeMainContentsCSlipItem1NameTeams">
                                           {item?.bettor}
                                        </div>
                                        <p>X</p>
                                    </div>
                                    <div className="HomeMainContentsCSlipItem1Choice">
                                        <p>{item?.oddsSelected}</p>
                                    </div>
                                </div>
                                ))
                            }
                               
                            </>
                        )}

                        <div className="HomeMainContentsCSlipItemsType">
                            <div className="active">Single</div>
                            <div>Multiple</div>
                            <div>System</div>
                        </div>
                    </div>
                    <div className="HomeMainContentsCSlipC">
                        <div className="HomeMainContentsCSlipCTop">
                            <div className="HomeMainContentsCSlipCTopA">
                                <p>All Single stakes are:</p>
                                <input type="text" />
                            </div>
                            <div className="HomeMainContentsCSlipCTopB">
                                <button>Clear</button>
                                <button className="">$100</button>
                                <button className="">$200</button>
                                <button className="">$500</button>
                                <button className="">$1,000</button>
                            </div>
                        </div>
                        <div className="HomeMainContentsCSlipCDown">
                            <p>
                                Total Stake: <span>4,000.00</span>
                            </p>
                            <button>Book bet</button>
                        </div>
                    </div> */}
                     <div className="BetSlipPageMobileWr">
                            <div className="BetSlipPageMobileCLoser">
                                <span >
                                    Close Betslip
                                </span>
                            </div>
                            <div className="BetSlipPageMobileA">
                                <h4>Betslip {betslipData.length}</h4>
                            </div>
                            <div className="BetSlipPageMobileB">
                                <p>Accept odds changes</p>
                                {
                                    betslipData.length === 0 ? null : <p
                                    className="ClearBtn"
                                    onClick={() => dispatch(clearSlip())}
                                >
                                    Clear Betslip
                                </p>
                                }
                                
                            </div>
                            <div className="BetSlipPageMobileItems">
                                {betslipData.length === 0 ? (
                                    <>
                                        {" "}
                                        <h3>
                                            Empty slip, Please select a odds
                                            from the fan page
                                        </h3>
                                    </>
                                ) : (
                                    <>
                                        {betslipData.map((item, index) => (
                                            <div
                                                className="BetSlipPageMobileItems1"
                                                key={index}
                                            >
                                                <div className="BetSlipPageMobileItem1Name">
                                                    <input type="checkbox" />
                                                    <div className="BetSlipPageMobileItem1NameTeams">
                                                        {item?.bettor}
                                                    </div>
                                                    <p
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() =>
                                                            handleRemoveItem(
                                                                item?.bettor
                                                            )
                                                        }
                                                    >
                                                        X
                                                    </p>
                                                </div>
                                                <div className="BetSlipPageMobileItem1Choice">
                                                    <div>
                                                        <p>
                                                            {item?.oddsSelected}
                                                        </p>
                                                        <p>
                                                            USD
                                                            <input
                                                                type="text"
                                                                placeholder="stake"
                                                                value={
                                                                    stakeAmounts[
                                                                        item
                                                                            .bettor
                                                                    ] || ""
                                                                }
                                                                onChange={(e) =>
                                                                    handleStakeChange(
                                                                        item.bettor,
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </p>
                                                        <p>
                                                            {calculateBTCValue(
                                                                item.bettor
                                                            )}{" "}
                                                            BTC
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h4>
                                                            Stake Value:{" "}
                                                            {item?.stake}
                                                            <span>
                                                                potential
                                                                winnings:{" "}
                                                                {item?.stake *
                                                                    (stakeAmounts[
                                                                        item
                                                                            .bettor
                                                                    ] ||
                                                                        0)}{" "}
                                                                USD <h5></h5>
                                                            </span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}

                                <div className="BetSlipPageMobileItemsType">
                                    {/* {
                                        betslipData.length > 1 ? 
                                    } */}
                                    <div
                                        className={`${
                                            betslipData.length <= 1
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        Single
                                    </div>
                                    <div
                                        className={`${
                                            betslipData.length > 1
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        Multiple
                                    </div>
                                </div>
                            </div>
                            <div className="BetSlipPageMobileC">
                                <div className="BetSlipPageMobileCTop">
                                    <div className="BetSlipPageMobileCTopA">
                                        <p>
                                            {betslipData.length > 1
                                                ? "Multiple"
                                                : "Single"}{" "}
                                            stake
                                            {betslipData.length > 1
                                                ? "s"
                                                : "Single"}{" "}
                                            {betslipData.length > 1
                                                ? "are"
                                                : "is"}
                                        </p>
                                        <input
                                            type="text"
                                            value={calculateTotalStake()}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="BetSlipPageMobileCDown">
                                    <div className="BetSlipPageMobileCDownDiv1">
                                        <h5>
                                            Total Stake ${calculateTotalStake()}
                                        </h5>
                                        <p>
                                            Total Stake:{" "}
                                            <span>
                                                BTC: {roundedTotalBTCStake}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="BetSlipPageMobileCDownDiv1">
                                        <h5>
                                            Total Returns $
                                            {calculateTotalReturns()}
                                        </h5>
                                        <p>
                                            Total Returns:
                                            <span>
                                                BTC: {roundedTotalReturn}
                                            </span>
                                        </p>
                                    </div>

                                    <button>Book bet</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default HomeContents;
