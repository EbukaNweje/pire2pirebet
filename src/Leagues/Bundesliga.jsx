import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const Bundesliga = ({handleGermany}) => {
    return (
        <div className="HomeMainContentsBNavGames">
            <h3>Top Bundesliga games</h3>
            <div className="HomeMainContentsBNavGamesItem">
                <div className="HomeMainContentsBNavGamesItemTop">
                    <p>15:30PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>27-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleGermany}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>Augsburg</p>
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
                        onClick={handleGermany}
                    >
                        <p>Bayern Munich</p>
                        <span>
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </div>
            <div className="HomeMainContentsBNavGamesItem">
                <div className="HomeMainContentsBNavGamesItemTop">
                    <p>15:30PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>27-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleGermany}
                    >
                        <p>Stuttgart</p>
                    </div>
                    <div className="HomeMainContentsBNavGamesItem1B">
                        <div className=" HomeMainContentsBNavGamesItem1B3rd">
                            <p>11%</p>
                            <span></span>
                        </div>
                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                            <p>44%</p>
                            <span></span>
                        </div>
                        <div className="HomeMainContentsBNavGamesItem1B1st">
                            <p>42%</p>
                            <span></span>
                        </div>
                    </div>
                    <div
                        className="HomeMainContentsBNavGamesItem1C"
                        onClick={handleGermany}
                    >
                        <p>RB Leipzig</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bundesliga;
