import { FaAngleLeft, FaAngleRight } from "react-icons/fa"


const Italia = () => {
  return (
    <div className="HomeMainContentsBNavGames">
    <h3>Top Italia games</h3>
    <div className="HomeMainContentsBNavGamesItem">
        <div className="HomeMainContentsBNavGamesItemTop">
            <p>WHO WILL WIN?</p>
        </div>
        <div className="HomeMainContentsBNavGamesItem1">
            <div className="HomeMainContentsBNavGamesItem1A">
                <span>
                    <FaAngleLeft />
                </span>
                <p>Napoli</p>
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
            <div className="HomeMainContentsBNavGamesItem1C">
                <p>Salernitana</p>
                <span>
                    <FaAngleRight />
                </span>
            </div>
        </div>
    </div>
    <div className="HomeMainContentsBNavGamesItem">
        <div className="HomeMainContentsBNavGamesItemTop">
            <p>WHO WILL WIN?</p>
        </div>
        <div className="HomeMainContentsBNavGamesItem1">
            <div className="HomeMainContentsBNavGamesItem1A">
                <p>Monza</p>
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
                <div className="HomeMainContentsBNavGamesItem1B3rd">
                    <p>60%</p>
                    <span></span>
                </div>
            </div>
            <div className="HomeMainContentsBNavGamesItem1C">
                <p>Inter</p>
            </div>
        </div>
    </div>
    
</div>
  )
}

export default Italia