import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const French = ({handleFrench}) => {
    return (
        <div className="HomeMainContentsBNavGames">
            <h3>Top French League games</h3>
            <div className="HomeMainContentsBNavGamesItem">
                <div className="HomeMainContentsBNavGamesItemTop">
                    <p>13:30PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>13-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleFrench}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>Monaco</p>
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
                        onClick={handleFrench}
                    >
                        <p>Reims</p>
                        <span>
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default French;
