import "./HomePage.css";
import {FaSearch, FaAngleDown} from "react-icons/fa";
import {MdOutlineSportsSoccer} from "react-icons/md";
// import bigImg from "../assets/carousel1.png";
import {useState} from "react";
import HomeContentsCenter from "./HomeContentsCenter";
import HomeOdds from "./HomeOdds";
import {useSelector, useDispatch} from "react-redux";
import HomeHeader from "../HomeHeader/HomeHeader";
import {clearSlip} from "../Redux/Features";

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
    console.log("BetSlip", betslipData);

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
                    <div className="HomeMainContentsCSlipA">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeContents;
