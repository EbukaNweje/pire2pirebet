// import "./HomePage.css";
// import data from "../assets/data.json";
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect, useState} from "react";
// import {betSlip, removeSingle} from "../Redux/Features";

// const ChealseaFanPage = () => {
//     const dispatch = useDispatch();

//     const [selectedOddsIndices, setSelectedOddsIndices] = useState(() =>
//         data.map(() => Math.floor(Math.random() * data[0]?.oddsData.length))
//     );

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setSelectedOddsIndices((prevIndices) =>
//                 prevIndices.map(() =>
//                     Math.floor(Math.random() * data[0]?.oddsData.length)
//                 )
//             );
//         }, 3600000);

//         return () => clearInterval(intervalId);
//     }, [data]);
//   const betslipData = useSelector((state) => state.Pier.slip);

//   return (
//       <>
//           <div className="HomeMainContentsBNavGamesSelect">
//               <div className="HomeMainContentsBNavGamesSelectA1">
//                   <p>Chelsea FanPage</p>
//               </div>
//               <div className="HomeMainContentsBNavGamesSelectA">
//                   <h5>Punter</h5>
//                   <p>Available picks</p>
//               </div>

//               <div className="HomeMainContentsBNavGamesSelectC">
//                   {data?.map((item, index) => (
//                       <div
//                           className="HomeMainContentsBNavGamesSelectCTeam1"
//                           key={index}
//                       >
//                           <div className="HomeMainContentsBNavGamesSelectCTeams">
//                               <p>{item?.userName}</p>
//                           </div>
//                           <div className="HomeMainContentsBNavGamesSelectCTeamsPick1">
//                               <div
//                                   className=""
//                                   onClick={() => {
//                                       const selectedOdds =
//                                           item.oddsData[
//                                               selectedOddsIndices[index]
//                                           ].oddsPick;

//                                       const existingOddsIndex =
//                                           betslipData.findIndex(
//                                               (slipItem) =>
//                                                   slipItem.bettor ===
//                                                       item.userName &&
//                                                   slipItem.oddsSelected ===
//                                                       selectedOdds
//                                           );

//                                       if (existingOddsIndex !== -1) {
//                                           dispatch(
//                                               removeSingle({
//                                                   bettor: item.userName,
//                                               })
//                                           );
//                                       } else {
//                                           dispatch(
//                                               betSlip({
//                                                   bettor: item.userName,
//                                                   team1: item.userPick.team1,
//                                                   team2: item.userPick.team2,
//                                                   oddsSelected: selectedOdds,
//                                               })
//                                           );
//                                       }
//                                   }}
//                               >
//                                   {
//                                       item.oddsData[selectedOddsIndices[index]]
//                                           .oddsPick
//                                   }
//                               </div>
//                           </div>
//                       </div>
//                   ))}
//               </div>
//           </div>
//       </>
//   );
// };

// export default ChealseaFanPage;

import "./HomePage.css";
import data from "../assets/data.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { betSlip, removeSingle } from "../Redux/Features";

const ChealseaFanPage = () => {
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

    return (
        <>
            <div className="HomeMainContentsBNavGamesSelect">
                <div className="HomeMainContentsBNavGamesSelectA1">
                    <p>Chelsea FanPage</p>
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
                                                        selectedOddsIndices[index]
                                                    ].oddsPick
                                        )
                                            ? "selected-odds"
                                            : "none-selected"
                                    }`}
                                    onClick={() => {
                                        const selectedOdds =
                                            item.oddsData[
                                                selectedOddsIndices[index]
                                            ].oddsPick;

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
                                                })
                                            );
                                        }
                                    }}
                                >
                                    {
                                        item.oddsData[selectedOddsIndices[index]]
                                            .oddsPick
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ChealseaFanPage;
