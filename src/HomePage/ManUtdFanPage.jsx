import './HomePage.css'
import data from "../assets/data.json";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {betSlip} from "../Redux/Features";

const ManUtdFanPage = () => {
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
  return (
    <>
    <div className="HomeMainContentsBNavGamesSelect">
        <div className="HomeMainContentsBNavGamesSelectA1">
            <p>Man-Utd FanPage</p>
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
                            className=""
                            onClick={() =>
                                dispatch(
                                    betSlip({
                                        bettor: item.userName,
                                        team1: item.userPick.team1,
                                        team2: item.userPick.team2,
                                        oddsSelected:
                                            item.oddsData[
                                                selectedOddsIndices[
                                                    index
                                                ]
                                            ].oddsPick,
                                    })
                                )
                            }
                        >
                            {
                                item.oddsData[
                                    selectedOddsIndices[index]
                                ].oddsPick
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</>
  )
}

export default ManUtdFanPage