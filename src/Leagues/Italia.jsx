import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const Italia = ({handleItaly}) => {
    return (
        <div className="HomeMainContentsBNavGames">
            <h3>Top Italia games</h3>
            <div className="HomeMainContentsBNavGamesItem">
                <div
                    className="HomeMainContentsBNavGamesItemTop"
                    style={{padding: "0px 10px"}}
                >
                    <p>18:00PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>27-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleItaly}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>Juventus</p>
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
                        onClick={handleItaly}
                    >
                        <p>Empoli</p>
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
                    <p>27-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleItaly}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>AC Milan</p>
                    </div>
                    <div className="HomeMainContentsBNavGamesItem1B">
                        <div className="HomeMainContentsBNavGamesItem1B1st">
                            <p>10%</p>
                            <span></span>
                        </div>
                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                            <p>30%</p>
                            <span></span>
                        </div>
                        <div className="  HomeMainContentsBNavGamesItem1B3rd">
                            <p>60%</p>
                            <span></span>
                        </div>
                    </div>
                    <div
                        className="HomeMainContentsBNavGamesItem1C"
                        onClick={handleItaly}
                    >
                        <p>Bologna</p>
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
                    <p>18:00PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>28-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleItaly}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>Lazio</p>
                    </div>
                    <div className="HomeMainContentsBNavGamesItem1B">
                        <div className="HomeMainContentsBNavGamesItem1B1st">
                            <p>35%</p>
                            <span></span>
                        </div>
                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                            <p>20%</p>
                            <span></span>
                        </div>
                        <div className="  HomeMainContentsBNavGamesItem1B3rd">
                            <p>45%</p>
                            <span></span>
                        </div>
                    </div>
                    <div
                        className="HomeMainContentsBNavGamesItem1C"
                        onClick={handleItaly}
                    >
                        <p>Napoli</p>
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
                    <p>20:45PM</p>
                    <p>WHO WILL WIN?</p>
                    <p>28-01-2024</p>
                </div>
                <div className="HomeMainContentsBNavGamesItem1">
                    <div
                        className="HomeMainContentsBNavGamesItem1A"
                        onClick={handleItaly}
                    >
                        <span>
                            <FaAngleLeft />
                        </span>
                        <p>Fiorentina</p>
                    </div>
                    <div className="HomeMainContentsBNavGamesItem1B">
                        <div className="HomeMainContentsBNavGamesItem1B1st">
                            <p>10%</p>
                            <span></span>
                        </div>
                        <div className="HomeMainContentsBNavGamesItem1B2nd">
                            <p>30%</p>
                            <span></span>
                        </div>
                        <div className="  HomeMainContentsBNavGamesItem1B3rd">
                            <p>60%</p>
                            <span></span>
                        </div>
                    </div>
                    <div
                        className="HomeMainContentsBNavGamesItem1C"
                        onClick={handleItaly}
                    >
                        <p>Inter</p>
                        <span>
                            <FaAngleRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Italia;
