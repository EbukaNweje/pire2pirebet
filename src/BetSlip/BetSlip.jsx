import "./BetSlip.css";
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";

function BetSlip() {
    return (
        <section className="Betslip-container">
            <div className="bestslip-up">
                <h5>Beslip</h5>
            </div>

            <div className="bestslip-mid">
                <article className="bestslip-mid-title">
                    <p>
                        Your betslip is empty please make one or more selection in order to
                        place a bet
                    </p>
                </article>

                <div className="bestslip-mid-detail">
                    <div className="Betslip">
                        <div className="Betslip-up">
                            <h5>Betslip</h5>
                            <p>Please insert a booking number below.</p>
                        </div>
                        <div className="Betslip-down">
                            <input type="text" />
                            <button>Book</button>
                        </div>
                    </div>
                    <div className="checkbet">
                        <div className="Betslip-up">
                            <h5>Check bet</h5>
                            <p>insert a valid bet id to check status.</p>
                        </div>
                        <div className="Betslip-down">
                            <input type="text" />
                            <button>Check</button>
                        </div>
                    </div>
                </div>

                <div className="betslip-accept">
                    <h5>Accept odd changes</h5>
                    <h5>Clean slip</h5>
                </div>

                <div className="slip">
                    <div className="slip-up">
                        <FaCheckSquare />
                        <span >
                            <h3>2.09</h3>
                            <p>cameroon VS India</p>
                        </span>
                        <MdOutlineCancel />
                    </div>
                    <div className="slip-down">
                        <span>
                            <h3>12</h3>
                            <p>Double Chance</p>
                        </span>
                        <h3>2.09</h3>
                    </div>
                </div>

            </div>

            <div className="bestslip-down">

                <div className="bestslip-single">
                    <button className="Single">Single</button>
                    <h3>Multiple</h3>
                    <h3>System</h3>
                </div>

                <div className="hastag">
                    <div className="hastag-up">
                        <h3>All singles stake:</h3>
                        <div className="hastag-box">
                            <FaHashtag />
                            <input className="hastag-boxinput" />
                        </div>
                    </div>
                    <div className="hastag-down">
                        <button className="hastag-down-boxes">Clear</button>
                        <button className="hastag-down-boxes">100</button>
                        <button className="hastag-down-boxes">200</button>
                        <button className="hastag-down-boxes">500</button>
                        <button className="hastag-down-boxes">1000</button>
                    </div>
                </div>

                <div className="stack">
                    <div className="stack-up">
                        <span><h3>Total Stake:</h3>
                            <h3>00</h3></span>
                        <span> <h3>Total Stake:</h3>
                            <h3>00</h3></span>
                    </div>
                    <div className="stake-btn">
                        <button>Book a bet</button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default BetSlip;
