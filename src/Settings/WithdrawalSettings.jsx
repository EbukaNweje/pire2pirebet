import React from "react";
import paymentloading from "./assets/paymentloading.png";
import bitcoin from "./assets/bitcoin.png";
import burger from "./assets/burger.png";

function WithdrawalSettings({showMobilePop}) {
  return (
    <>
      <div className="WithdrawNavPage">
        <div className="BurgerMenu">
          <img src={burger} onClick={showMobilePop} alt="" />
        </div>
        {/* <div className='NavPageHeader'>
                    <span>Withdrawal</span>
                </div> */}
        <div
          style={{ justifyContent: "flex-end" }}
          className="WithdrawalContent">
          <img className="CrytpoImages" src={bitcoin} alt="" />
          <select className="WithdrawalSelection">
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="DODGE">DODGE</option>
            <option value="BNB">BNB</option>
          </select>
        </div>
        <div
          style={{ justifyContent: "space-between" }}
          className="WithdrawalContent">
          <span>Amount</span>
          <input
            className="WithdrawalInput"
            type="text"
            value={"0.009225  BTC"}
          />
          <p className="MaxPlaceHolder">MAX</p>
        </div>
        <div
          style={{ justifyContent: "space-between" }}
          className="WithdrawalContent">
          <span>Address</span>
          <input
            className="WithdrawalInput"
            type="text"
            value={"bfswjslwjwknkwcknck...qkhjbd3wx"}
          />
          <p className="MaxPlaceHolder">PASTE</p>
        </div>
        <div className="WithdrawalContentBtn">
          <button className="WithdrawFundsBtn">Withdraw</button>
        </div>
        <div className="WaitingPaymentContent">
          <img src={paymentloading} alt="" />
          <span>Waiting for payment</span>
        </div>
      </div>
    </>
  );
}

export default WithdrawalSettings;
