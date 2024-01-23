// import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const Laliga = ({handleSpain}) => {
    return (
        <div className="HomeMainContentsBNavGames">
            <h3>Top  picks for Laliga</h3>
            <div className="HomeMainContentsBNavGamesItem">
                <div className="HomeMainContentsBNavGamesItemTop">
                    <p>16:15PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>27-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleSpain}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>Las Palmas</p>
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
                        onClick={handleSpain}
                    >
                        <p>Real Madrid</p>
                        <span>
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </div>
            <div className="HomeMainContentsBNavGamesItem">
                <div className="HomeMainContentsBNavGamesItemTop">
                    <p>18:30PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>27-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleSpain}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>Barcelona</p>
                    </div>
                    <div className="HomeMainContentsBNavGamesItem1B">
                        <div className=" HomeMainContentsBNavGamesItem1B1st">
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
                        onClick={handleSpain}
                    >
                        <p>Villareal</p>
                        <span>
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laliga;
