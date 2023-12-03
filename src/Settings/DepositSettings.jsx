import React, { useState } from "react";
import bitcoin from "./assets/bitcoin.png";
import QR from "./assets/QR.png";
import burger from "./assets/burger.png";

function DepositSettings({showMobilePop}) {

  return (
    <div className="DepositNavPage">
      <div className="BurgerMenu">
        <img src={burger} onClick={showMobilePop} alt="" />
      </div>
      <div style={{ justifyContent: "flex-end" }} className="DepositContent">
        <img className="CrytpoImages" src={bitcoin} alt="" />
        <select className="DepositSelection">
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="DODGE">DODGE</option>
          <option value="BNB">BNB</option>
        </select>
      </div>
      <div className="DepositQR">
        <img className="DepositQRCode" src={QR} alt="" />
      </div>
      <div
        style={{ justifyContent: "space-between" }}
        className="DepositContent">
        <span>Address</span>
        <input
          className="DepositInput"
          type="text"
          value={"bfswjslwjwknkwk...qkhjhd23wx"}
        />
        <p className="MaxPlaceHolder">PASTE</p>
      </div>
    </div>
  );
}

export default DepositSettings;
