
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
                  style={{justifyContent: "flex-end"}}
                  className="WithdrawalContent"
              >
                  <img className="CrytpoImages" src={bitcoin} alt="" />
                  <select className="WithdrawalSelection">
                      <option value="BTC">BTC</option>
                  </select>
              </div>
              <div
                  style={{justifyContent: "space-between"}}
                  className="WithdrawalContent"
              >
                  <span>Amount</span>
                  <input
                      className="WithdrawalInput"
                      type="text"
                      value={"0.03449"}
                  />
                  <p className="MaxPlaceHolder">BTC</p>
              </div>
              <div
                  style={{justifyContent: "space-between"}}
                  className="WithdrawalContent"
              >
                  <span>Address</span>
                  <input
                      className="WithdrawalInput"
                      type="text"
                      value={"bc1q40xd9vyzz2n7y9wsrjxcqgk8jc8wj5x5sthptl"}
                  />
                  <p className="MaxPlaceHolder"></p>
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
