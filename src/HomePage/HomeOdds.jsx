import { FaArrowLeftLong } from "react-icons/fa6";
import "./HomeOdds.css";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useState } from "react";
import {MdOutlineCancel} from "react-icons/md";

const HomeOdds = ({ShowMainContentA}) => {
    const oddsData = [
        {
            oddsPick: "-0 / x1",
            pickInfo: "No goal down and no extra stake offer",
        },
        {
            oddsPick: "-1 / x1",
            pickInfo: "A goal down and no extra stake offer",
        },
        {
            oddsPick: "-2x1",
            pickInfo: "Two goals down and no extra stake offer",
        },
        {
            oddsPick: "-3x1",
            pickInfo: "Three goals down and no extra stake offer",
        },
        {
            oddsPick: "-4x1",
            pickInfo: "Four goals down and no extra stake offer",
        },
        {
            oddsPick: "-0x2",
            pickInfo: "No goal down but I can twofold your stake",
        },
        {
            oddsPick: "-0x3",
            pickInfo: "No goal down but I can threefold your stake",
        },
        {
            oddsPick: "-0x4",
            pickInfo: "No goal down but I can fourfold your stake",
        },
        {
            oddsPick: "-0x5",
            pickInfo: "No goal down but I can fivefold your stake",
        },
        {
            oddsPick: "-0x6",
            pickInfo: "No goal down but I can sixfold your stake",
        },
        {
            oddsPick: "-1x2",
            pickInfo: "A goal down but I can twofold your stake",
        },
        {
            oddsPick: "-1x3",
            pickInfo: "A goal down but I can threefold your stake",
        },
        {
            oddsPick: "-1x4",
            pickInfo: "A goal down but I can fourfold your stake",
        },
        {
            oddsPick: "-1x5",
            pickInfo: "A goal down but I can fivefold your stake",
        },
        {
            oddsPick: "-1x6",
            pickInfo: "A goal down but I can sixfold your stake",
        },
        {
            oddsPick: "-2x1",
            pickInfo: "Two goals down and no extra stake offer",
        },
        {
            oddsPick: "-2x2",
            pickInfo: "Two goals down but I can twofold your stake",
        },
        {
            oddsPick: "-2x3",
            pickInfo: "Two goals down but I can threefold your stake",
        },
        {
            oddsPick: "-2x4",
            pickInfo: "Two goals down but I can fourfold your stake",
        },
        {
            oddsPick: "-2x5",
            pickInfo: "Two goals down but I can fivefold your stake",
        },
        {
            oddsPick: "-2x6",
            pickInfo: "Two goals down but I can sixfold your stake",
        },
        {
            oddsPick: "-3x1",
            pickInfo: "Three goals down and no extra stake offer",
        },
        {
            oddsPick: "-3x2",
            pickInfo: "Three goals down but I can twofold your stake",
        },
        {
            oddsPick: "-3x3",
            pickInfo: "Three goals down but I can threefold your stake",
        },
        {
            oddsPick: "-3x4",
            pickInfo: "Three goals down but I can fourfold your stake",
        },
        {
            oddsPick: "-3x5",
            pickInfo: "Three goals down but I can fivefold your stake",
        },
        {
            oddsPick: "-3x6",
            pickInfo: "Three goals down but I can sixfold your stake",
        },
        {
            oddsPick: "-4x1",
            pickInfo: "Four goals down and no extra stake offer",
        },
        {
            oddsPick: "-4x2",
            pickInfo: "Four goals down but I can twofold your stake",
        },
        {
            oddsPick: "-4x3",
            pickInfo: "Four goals down but I can threefold your stake",
        },
        {
            oddsPick: "-4x4",
            pickInfo: "Four goals down but I can fourfold your stake",
        },
        {
            oddsPick: "-4x5",
            pickInfo: "Four goals down but I can fivefold your stake",
        },
        {
            oddsPick: "-4x6",
            pickInfo: "Four goals down but I can sixfold your stake",
        },
        {
            oddsPick: "+1x1",
            pickInfo: "Already leading by a goal and no extra stake offer",
        },
        {
            oddsPick: "+1x2",
            pickInfo: "Already leading by a goal and I can twofold your stake",
        },
        {
            oddsPick: "+1x3",
            pickInfo:
                "Already leading by a goal and I can threefold your stake",
        },
        {
            oddsPick: "+1x4",
            pickInfo: "Already leading by a goal and I can fourfold your stake",
        },
        {
            oddsPick: "+1x5",
            pickInfo: "Already leading by a goal and I can fivefold your stake",
        },
        {
            oddsPick: "+1x6",
            pickInfo: "Already leading by a goal and I can sixfold your stake",
        },
        {
            oddsPick: "+2x1",
            pickInfo: "Already leading by two goals and no extra stake offer",
        },
        {
            oddsPick: "+2x2",
            pickInfo:
                "Already leading by two goals and I can twofold your stake",
        },
        {
            oddsPick: "+2x3",
            pickInfo:
                "Already leading by two goals and I can threefold your stake",
        },
        {
            oddsPick: "+2x4",
            pickInfo:
                "Already leading by two goals and I can fourfold your stake",
        },
        {
            oddsPick: "+2x5",
            pickInfo:
                "Already leading by two goals and I can fivefold your stake",
        },
        {
            oddsPick: "+2x6",
            pickInfo:
                "Already leading by two goals and I can sixfold your stake",
        },
        {
            oddsPick: "+3x1",
            pickInfo: "Already leading by three goals and no extra stake offer",
        },
        {
            oddsPick: "+3x2",
            pickInfo:
                "Already leading by three goals and I can twofold your stake",
        },
        {
            oddsPick: "+3x3",
            pickInfo:
                "Already leading by three goals and I can threefold your stake",
        },
        {
            oddsPick: "+3x4",
            pickInfo:
                "Already leading by three goals and I can fourfold your stake",
        },
        {
            oddsPick: "+3x5",
            pickInfo:
                "Already leading by three goals and I can fivefold your stake",
        },
        {
            oddsPick: "+3x6",
            pickInfo:
                "Already leading by three goals and I can sixfold your stake",
        },
        {
            oddsPick: "+4x1",
            pickInfo: "Already leading by four goals and no extra stake offer",
        },
        {
            oddsPick: "+4x2",
            pickInfo:
                "Already leading by four goals and I can twofold your stake",
        },
        {
            oddsPick: "+4x3",
            pickInfo:
                "Already leading by four goals and I can threefold your stake",
        },
        {
            oddsPick: "+4x4",
            pickInfo:
                "Already leading by four goals and I can fourfold your stake",
        },
        {
            oddsPick: "+4x5",
            pickInfo:
                "Already leading by four goals and I can fivefold your stake",
        },
        {
            oddsPick: "+4x6",
            pickInfo:
                "Already leading by four goals and I can sixfold your stake",
        },
    ];

    const [toolTipStates, setToolTipStates] = useState(
        Array(oddsData.length).fill(false)
    );

    const [showPopUp, setShowPopUp] = useState(false);

    const handleToolTip = (index) => {
        setShowPopUp(true);
        setToolTipStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? !state : false))
        );
    };

    return (
        <>
            <div className="HomeOddsBody">
                <div className="HomeOddsHeader">
                    <div className="HomeOddsHeaderTop">
                        <p onClick={ShowMainContentA}>
                            <span>
                                <FaArrowLeftLong className="FaArrowLeftLong" />
                            </span>{" "}
                            Back to fan picks
                        </p>
                        if
                    </div>
                    <div className="HomeOddsHeaderDown">
                        <h4>Aurthur picks</h4>
                    </div>
                </div>
                <div className="HomeOddsWrap">
                    <div className="HomeOddsItem">
                        {oddsData.map((item, index) => (
                            <div className="HomeOddsItemA" key={index}>
                                {item?.oddsPick}
                                <span onClick={() => handleToolTip(index)}>
                                    <IoInformationCircleOutline className="FaArrowLeftLong" />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {showPopUp ? (
                    <>
                        <div className="OddsBodyPopUp">
                            <div className="OddsBodyPopUpContent">
                                <span className="OddsBodyPopUpCancel">
                                    <MdOutlineCancel
                                        className="MdOutlineCancel"
                                        onClick={() => setShowPopUp(false)}
                                    />
                                </span>
                                {oddsData.map((item, i) => (
                                    <>
                                        {/* <p key={index}>{item.oddsPick}</p> */}
                                        {toolTipStates[i] && (
                                            <h5 key={i}>{item?.pickInfo}</h5>
                                        )}
                                    </>
                                ))}
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </>
    );
};

export default HomeOdds;
