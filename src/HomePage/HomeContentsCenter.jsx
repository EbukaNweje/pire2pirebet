import { FaAngleLeft, FaAngleRight, FaHome } from "react-icons/fa";
import "./HomePage.css";
import { MdOutlineSportsSoccer } from "react-icons/md";
// import { NavLink } from "react-router-dom";
import { LuFileSearch2 } from "react-icons/lu";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {betSlip, clearSlip, removeSingle} from "../Redux/Features";
import {useNavigate} from "react-router-dom";
// import data from '../assets/data.json'
import BarcaFanPage from "./BarcaFanPage";
import MadridFanPage from "./MadridFanPage";
import ManUtdFanPage from "./ManUtdFanPage";
import PoolFanPage from "./PoolFanPage";
import ArsenalFanPage from "./ArsenalFanPage";
import CityFanPage from "./CityFanPage";
import ChealseaFanPage from "./ChealseaFanPage";

const HomeContentsCenter = ({
    showChelseaFan,
    showPoolFan,
    showArsenalFan,
    showBarcaFan,
    showManUFan,
    showCityFan,
    showMadridFan,
    ShowMainContentB,
    ShowFanPicksA,
}) => {
    // console.log(data);

    const dispatch = useDispatch();

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageArray = [
        "https://cdn3.f-cdn.com//files/download/80772190/Facebook-Cover-Design-4.png?width=780&height=403&fit=crop",
        "https://img.freepik.com/premium-vector/woman-basketball-banner-sports-banner-design-premium-template-vector_356357-70.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcc_SDVxiMfHA2PEhZZJaPE-xAua07vZD0hA&usqp=CAU",
        "https://img.freepik.com/free-vector/gradient-halftone-basketball-twitch-banner_23-2149346315.jpg",
    ];
    const totalImages = imageArray.length;

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextImage();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    const nav = useNavigate();

    //   console.log(handleSeeMoreOdds);
    const betslipData = useSelector((state) => state.Pier.slip);

    const handleShowHome = () => {
        setShowBetslip(false);
        nav("/home");
    };

    const [showBetslip, setShowBetslip] = useState(false);

    const handleSHowBetslip = () => {
        setShowBetslip(!showBetslip);
    };

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


    return (
        <>
            {" "}
            <div className="HomeMainContentsB">
                <div className="HomeMainContentsBCarousel">
                    <div className="HomeMainContentsBCarouselImgDiv">
                        <span
                            className="carouselBack"
                            onClick={handlePrevImage}
                        >
                            <FaAngleLeft />
                        </span>
                        <img src={imageArray[currentImageIndex]} alt="" />
                        <span
                            className="carouselFront"
                            onClick={handleNextImage}
                        >
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
                <div className="HomeMainContentsBNav">
                    <div className="HomeMainContentsBNavTop">
                        <p>Live Highlight</p>
                        <p>View Live Betting</p>
                    </div>
                    <div className="HomeMainContentsBNavDown">
                        <div className="HomeMainContentsBNavDownItem active">
                            <span className="HomeMainContentsBNavDownIcon">
                                <MdOutlineSportsSoccer />
                            </span>
                            <p>Soccer</p>
                        </div>
                    </div>
                </div>
                {showChelseaFan ? (
                    // <>
                    //     <div className="HomeMainContentsBNavGamesSelect">
                    //         <div className="HomeMainContentsBNavGamesSelectA1">
                    //             <p>Chelsea FanPage</p>
                    //         </div>
                    //         <div className="HomeMainContentsBNavGamesSelectA">
                    //             <h5>Punter</h5>
                    //             <p>Available picks</p>
                    //         </div>

                    //         <div className="HomeMainContentsBNavGamesSelectC">
                    //             {data?.map((item, index) => (
                    //                 <div
                    //                     className="HomeMainContentsBNavGamesSelectCTeam1"
                    //                     key={index}
                    //                 >
                    //                     <div className="HomeMainContentsBNavGamesSelectCTeams">
                    //                         <p>{item?.userName}</p>
                    //                     </div>
                    //                     <div className="HomeMainContentsBNavGamesSelectCTeamsPick1">
                    //                         <div
                    //                             className=""
                    //                             onClick={() =>
                    //                                 dispatch(
                    //                                     betSlip({
                    //                                         bettor: item.userName,
                    //                                         team1: item.userPick
                    //                                             .team1,
                    //                                         team2: item.userPick
                    //                                             .team2,
                    //                                         oddsSelected:
                    //                                             item.oddsData[
                    //                                                 selectedOddsIndices[
                    //                                                     index
                    //                                                 ]
                    //                                             ].oddsPick,
                    //                                     })
                    //                                 )
                    //                             }
                    //                         >
                    //                             {
                    //                                 item.oddsData[
                    //                                     selectedOddsIndices[
                    //                                         index
                    //                                     ]
                    //                                 ].oddsPick
                    //                             }
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             ))}
                    //         </div>
                    //     </div>
                    // </>
                    <ChealseaFanPage />
                ) : showBarcaFan ? (
                    <BarcaFanPage />
                ) : showMadridFan ? (
                    <MadridFanPage />
                ) : showManUFan ? (
                    <ManUtdFanPage />
                ) : showPoolFan ? (
                    <PoolFanPage />
                ) : showArsenalFan ? (
                    <ArsenalFanPage />
                ) : showCityFan ? (
                    <CityFanPage />
                ) : ShowFanPicksA ? (
                    <>
                        <div className="HomeMainContentsBNavGames">
                            <h3>Top Games for the day</h3>
                            <div className="HomeMainContentsBNavGamesItem">
                                <div className="HomeMainContentsBNavGamesItemTop">
                                    <p>WHO WILL WIN?</p>
                                </div>
                                <div className="HomeMainContentsBNavGamesItem1">
                                    <div className="HomeMainContentsBNavGamesItem1A">
                                        <span>
                                            <FaAngleLeft />
                                        </span>
                                        <p>Galatasary</p>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1B">
                                        <div className="HomeMainContentsBNavGamesItem1B1st">
                                            <p>42%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                                            <p>44%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B3rd">
                                            <p>11%</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1C">
                                        <p>Manchester United</p>
                                        <span>
                                            <FaAngleRight />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeMainContentsBNavGamesItem">
                                <div className="HomeMainContentsBNavGamesItemTop">
                                    <p>WHO WILL WIN?</p>
                                </div>
                                <div className="HomeMainContentsBNavGamesItem1">
                                    <div className="HomeMainContentsBNavGamesItem1A">
                                        <p>Galatasary</p>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1B">
                                        <div className="HomeMainContentsBNavGamesItem1B1st">
                                            <p>42%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                                            <p>44%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B3rd">
                                            <p>11%</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1C">
                                        <p>Manchester United</p>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeMainContentsBNavGamesItem">
                                <div className="HomeMainContentsBNavGamesItemTop">
                                    <p>WHO WILL WIN?</p>
                                </div>
                                <div className="HomeMainContentsBNavGamesItem1">
                                    <div className="HomeMainContentsBNavGamesItem1A">
                                        <p>Galatasary</p>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1B">
                                        <div className="HomeMainContentsBNavGamesItem1B1st">
                                            <p>42%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                                            <p>44%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B3rd">
                                            <p>11%</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1C">
                                        <p>Manchester United</p>
                                    </div>
                                </div>
                            </div>
                            <div className="HomeMainContentsBNavGamesItem">
                                <div className="HomeMainContentsBNavGamesItemTop">
                                    <p>WHO WILL WIN?</p>
                                </div>
                                <div className="HomeMainContentsBNavGamesItem1">
                                    <div className="HomeMainContentsBNavGamesItem1A">
                                        <p>Galatasary</p>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1B">
                                        <div className="HomeMainContentsBNavGamesItem1B1st">
                                            <p>42%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                                            <p>44%</p>
                                            <span></span>
                                        </div>
                                        <div className="HomeMainContentsBNavGamesItem1B3rd">
                                            <p>11%</p>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="HomeMainContentsBNavGamesItem1C">
                                        <p>Manchester United</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
                <div className="MobileFooter">
                    <div onClick={handleShowHome}>
                        <span>
                            <FaHome className="FooterIcon" />
                        </span>
                        <p>Home</p>
                    </div>
                    <div onClick={handleSHowBetslip}>
                        <span>
                            <p className="FooterIcon">{betslipData.length}</p>
                        </span>
                        <p>Betslip</p>
                    </div>
                    <div>
                        <span>
                            <LuFileSearch2 className="FooterIcon" />
                        </span>
                        <p>Checkbet</p>
                    </div>
                </div>
                {showBetslip ? (
                    <div className="BetSlipPageMobile">
                        <div className="BetSlipPageMobileWr">
                            <div className="BetSlipPageMobileCLoser">
                                <span onClick={() => setShowBetslip(false)}>
                                    Close Betslip
                                </span>
                            </div>
                            <div className="BetSlipPageMobileA">
                                <h4>Betslip {betslipData.length}</h4>
                            </div>
                            <div className="BetSlipPageMobileB">
                                <p>Accept odds changes</p>
                                <p
                                    className="ClearBtn"
                                    onClick={() => dispatch(clearSlip())}
                                >
                                    Clear Betslip
                                </p>
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
                                                    <p>{item?.oddsSelected}</p>
                                                    <p>
                                                        <input
                                                            type="text"
                                                            placeholder="stake"
                                                            value={
                                                                stakeAmounts[
                                                                    item.bettor
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
                                                        BTC
                                                    </p>
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
                                        <p>All {betslipData.length > 1? "Multiple" : "Single"} stakes are:</p>
                                        <input
                                            type="text"
                                            value={calculateTotalStake()}
                                           
                                        />
                                    </div>
                                </div>
                                <div className="BetSlipPageMobileCDown">
                                    <p>
                                        Total Stake:{" "}
                                        <span>BTC:{calculateTotalStake()}</span>
                                    </p>
                                    <p>
                                        Total Returns: <span>BTC: 0.13320</span>
                                    </p>
                                    <button>Book bet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default HomeContentsCenter;
