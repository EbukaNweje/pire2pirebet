// import  { useState } from "react";
import bitcoin from "./assets/bitcoin.png";
import QR from "../assets/WhatsApp Image 2023-12-03 at 00.48.03_dd885e5a.jpg";
import burger from "./assets/burger.png";

function DepositSettings({showMobilePop}) {
    return (
        <div className="DepositNavPage">
            <div className="BurgerMenu">
                <img src={burger} onClick={showMobilePop} alt="" />
            </div>
            <div
                style={{justifyContent: "flex-end"}}
                className="DepositContent"
            >
                <img className="CrytpoImages" src={bitcoin} alt="" />
                <select className="DepositSelection">
                    <option value="BTC">BTC</option>
                </select>
            </div>
            <div className="DepositQR">
                <img className="DepositQRCode" src={QR} alt="" />
            </div>
            <div
                style={{justifyContent: "space-between"}}
                className="DepositContent"
            >
                <span>Address</span>
                <input
                    className="DepositInput"
                    type="text"
                    value={"bc1q40xd9vyzz2n7y9wsrjxcqgk8jc8wj5x5sthptl"}
                />
            </div>
        </div>
    );
}

export default DepositSettings;
