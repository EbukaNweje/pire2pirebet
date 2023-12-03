import "./HomePage.css";
import {FaSearch, FaAngleDown} from "react-icons/fa";
import {MdOutlineSportsSoccer} from "react-icons/md";
// import bigImg from "../assets/carousel1.png";
import {useState} from "react";
import HomeContentsCenter from "./HomeContentsCenter";
import HomeOdds from "./HomeOdds";
import HomeHeader from "../HomeHeader/HomeHeader";

const HomeContents = () => {
    const [showFan, setShowFan] = useState(false);
    const [showFanContent, setShowFanContent] = useState(false);
    const [showFanPick, setShowFanPick] = useState(true);
    console.log(showFanPick);

    const handleShowFanDrop = () => {
        setShowFan(!showFan);
    };
    const handleShowFanContent = () => {
        setShowFanContent(true);
        setShowFanPick(false);
    };
    const handleShowFanPick = () => {
        setShowFanPick(true);
        setShowFanContent(false);
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

    return (
        <>
            <HomeHeader  showFanC={handleShowFanContent}
                        ShowMainContentB={showMainContentB}
                        ShowFanPicksA={handleShowFanPick}/>
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
                                    onClick={handleShowFanContent}
                                >
                                    Chelsea
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowFanContent}
                                >
                                    Barcelona
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowFanContent}
                                >
                                    Real Madrid
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowFanContent}
                                >
                                    Manchester United
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowFanContent}
                                >
                                    Liverpool
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowFanContent}
                                >
                                    Arsenal
                                </div>
                                <div
                                    className="HomeMainContentsALinksItemFP1"
                                    onClick={handleShowFanContent}
                                >
                                    Man City
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {mainContentA ? (
                    <HomeContentsCenter
                        showFanC={showFanContent}
                        ShowMainContentB={showMainContentB}
                        ShowFanPicksA={handleShowFanPick}
                    />
                ) : mainContentB ? (
                    <HomeOdds ShowMainContentA={showMainContentA} />
                ) : null}

                <div className="HomeMainContentsCSlip">
                    <div className="HomeMainContentsCSlipA">
                        <h4>Betslip (0)</h4>
                    </div>
                    <div className="HomeMainContentsCSlipB">
                        <p>Accept odds changes</p>
                        <p>Clean Slip</p>
                    </div>
                    <div className="HomeMainContentsCSlipItems">
                       <p>Empty slip</p>
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
