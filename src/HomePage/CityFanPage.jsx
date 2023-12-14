import "./HomePage.css";
import data from "../assets/data.json";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
// import {betSlip} from "../Redux/Features";
import {betSlip, removeSingle} from "../Redux/Features";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";


const CityFanPage = () => {
    const dispatch = useDispatch();

    const [selectedOddsIndices, setSelectedOddsIndices] = useState(() =>
        data.map(() => Math.floor(Math.random() * data[0]?.oddsData.length))
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSelectedOddsIndices((prevIndices) =>
                prevIndices.map(() =>
                    Math.floor(Math.random() * data[0]?.oddsData.length)
                )
            );
        }, 3600000);

        return () => clearInterval(intervalId);
    }, [data]);

    const betslipData = useSelector((state) => state.Pier.slip);

    const [toolTipStates, setToolTipStates] = useState(
        Array(data.map(() => false))
    );

    const [selectedTooltipIndex, setSelectedTooltipIndex] = useState(null);
    const [showPopUp, setShowPopUp] = useState(false);

    const handleToolTip = (index) => {
        setShowPopUp(true);
        setSelectedTooltipIndex(index);
        setToolTipStates((prevStates) =>
            prevStates.map((_, i) => i === index)
        );
    };

    const closeToolTip = () => {
        setShowPopUp(false);
        setSelectedTooltipIndex(null);
        setToolTipStates((prevStates) =>
            prevStates.map(() => false)
        );
    };


  return (
    <>
     {showPopUp && (
                <div className="OddsBodyPopUp">
                    <div className="OddsBodyPopUpContent">
                        <span className="OddsBodyPopUpCancel">
                            <MdOutlineCancel
                                className="MdOutlineCancel"
                                onClick={closeToolTip}
                            />
                        </span>
                        {selectedTooltipIndex !== null && (
                            <>
                            
                            <h5>
                                {
                                    data[selectedTooltipIndex]?.oddsData[
                                        selectedOddsIndices[
                                            selectedTooltipIndex
                                        ]
                                    ]?.pickInfo
                                }
                            </h5>
                            <p style={{fontSize:'20px'}}> {
                                    data[selectedTooltipIndex]?.oddsData[
                                        selectedOddsIndices[
                                            selectedTooltipIndex
                                        ]
                                    ]?.oddsPick
                                }</p>
                                </>
                        )}
                    </div>
                </div>
            )}
            <div className="HomeMainContentsBNavGamesSelect">
                <div className="HomeMainContentsBNavGamesSelectA1">
                    <p>Manchester City FanPage</p>
                </div>
                <div className="HomeMainContentsBNavGamesSelectA">
                    <h5>Punter</h5>
                    <p>Available picks</p>
                </div>
                <div className="HomeMainContentsBNavGamesSelectC">
                    {data?.map((item, index) => (
                        <div
                            className="HomeMainContentsBNavGamesSelectCTeam1"
                            key={index}
                        >
                            <div className="HomeMainContentsBNavGamesSelectCTeams">
                                <p>{item?.userName}</p>
                            </div>
                            <div className="HomeMainContentsBNavGamesSelectCTeamsPick1">
                                <div
                                    className={`${
                                        betslipData.some(
                                            (slipItem) =>
                                                slipItem.bettor ===
                                                    item.userName &&
                                                slipItem.oddsSelected ===
                                                    item.oddsData[
                                                        selectedOddsIndices[
                                                            index
                                                        ]
                                                    ].oddsPick
                                        )
                                            ? "selected-odds"
                                            : "none-selected"
                                    }`}
                                    onClick={() => {
                                        const selectedOddsIndex =
                                            selectedOddsIndices[index];
                                        const selectedOdds =
                                            item.oddsData[selectedOddsIndex]
                                                .oddsPick;
                                        const stake =
                                            item.oddsData[selectedOddsIndex]
                                                .stake;

                                        const existingOddsIndex =
                                            betslipData.findIndex(
                                                (slipItem) =>
                                                    slipItem.bettor ===
                                                        item.userName &&
                                                    slipItem.oddsSelected ===
                                                        selectedOdds
                                            );

                                        if (existingOddsIndex !== -1) {
                                            dispatch(
                                                removeSingle({
                                                    bettor: item.userName,
                                                })
                                            );
                                        } else {
                                            dispatch(
                                                betSlip({
                                                    bettor: item.userName,
                                                    team1: item.userPick.team1,
                                                    team2: item.userPick.team2,
                                                    oddsSelected: selectedOdds,
                                                    stake: stake,
                                                })
                                            );
                                        }
                                    }}
                                >
                                    {
                                        item.oddsData[
                                            selectedOddsIndices[index]
                                        ].oddsPick
                                    }
                                </div>
                                <span onClick={() => handleToolTip(index)}>
                                    <IoInformationCircleOutline className="FaArrowLeftLong" />
                                </span>
                            </div>
                            {/* {toolTipStates[index] && (
                                <h5>{item?.oddsData[selectedOddsIndices[index]]?.pickInfo}</h5>
                            )} */}
                        </div>
                    ))}
                </div>
            </div>
</>
  )
}

export default CityFanPage