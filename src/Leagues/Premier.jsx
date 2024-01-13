import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const Premier = ({handleShowChels, handleShowCity}) => {
    return (
        <div className="HomeMainContentsBNavGames">
            <h3>Top Premier League games</h3>
            <div className="HomeMainContentsBNavGamesItem">
                <div
                    className="HomeMainContentsBNavGamesItemTop"
                    style={{padding: "0px 10px"}}
                >
                    <p>13:30PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>13-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleShowChels}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>Chelsea</p>
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
                    <div
                        className="HomeMainContentsBNavGamesItem1C"
                        onClick={handleShowChels}
                    >
                        <p>Fulham</p>
                        <span>
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </div>
            <div className="HomeMainContentsBNavGamesItem">
                <div
                    className="HomeMainContentsBNavGamesItemTop"
                    style={{padding: "0px 10px"}}
                >
                    <p>13:30PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>13-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleShowCity}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>Newcastle</p>
                    </div>
                    <div className="HomeMainContentsBNavGamesItem1B">
                        <div className="HomeMainContentsBNavGamesItem1B3rd">
                            <p>11%</p>
                            <span></span>
                        </div>
                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                            <p>44%</p>
                            <span></span>
                        </div>
                        <div className=" HomeMainContentsBNavGamesItem1B1st">
                            <p>42%</p>
                            <span></span>
                        </div>
                    </div>
                    <div
                        className="HomeMainContentsBNavGamesItem1C"
                        onClick={handleShowCity}
                    >
                        <p>Manchester City</p>
                        <span>
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Premier;
