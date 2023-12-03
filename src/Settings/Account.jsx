import  {useState} from "react";
import "./Account.css";
import "./AccountRes.css";
import WithdrawalSettings from "./WithdrawalSettings";
import TransactionHistory from "./TransactionHistory";
import DepositSettings from "./DepositSettings";
import burger from "./assets/burger.png";
// import SettingsNav from './SettingsNav'?
import AccountSettings from "./AccountSetting";
import {MdOutlineCancel} from "react-icons/md";

function Account({accPops}) {
    const [deposit, setDeposit] = useState(true);
    const [withdrawal, setwithdrawal] = useState(false);
    const [transation, setTransation] = useState(false);
    const [accountSettings, setAccountSettings] = useState(false);
    const [mobilePop, setmobilePop] = useState(false);

    const showMobilePop = () => {
        setmobilePop(!mobilePop);
    };

    const handleClosePop = () => {
        accPops();
    };

    return (
        <>
            <div className="MainSettings">
                <div className="SettingsPopUp">
                    {mobilePop ? (
                        <div className="MobilePopUp">
                            <div className="AccountNav">
                                <span
                                    style={{color: deposit ? "#119702" : null}}
                                    onClick={() => {
                                        setDeposit(true);
                                        setwithdrawal(false);
                                        setTransation(false);
                                        setAccountSettings(false);
                                        setTimeout(() => {
                                            setmobilePop(false);
                                        }, 200);
                                    }}
                                >
                                    Deposit
                                </span>
                                <div className="NavLineSeperator"></div>
                            </div>
                            <div className="AccountNav">
                                <span
                                    style={{
                                        color: withdrawal ? "#119702" : null,
                                    }}
                                    onClick={() => {
                                        setDeposit(false);
                                        setwithdrawal(true);
                                        setTransation(false);
                                        setAccountSettings(false);
                                        setTimeout(() => {
                                            setmobilePop(false);
                                        }, 200);
                                    }}
                                >
                                    Withdraw
                                </span>
                                <div className="NavLineSeperator"></div>
                            </div>
                            <div className="AccountNav">
                                <span
                                    style={{
                                        color: transation ? "#119702" : null,
                                    }}
                                    onClick={() => {
                                        setDeposit(false);
                                        setwithdrawal(false);
                                        setTransation(true);
                                        setAccountSettings(false);
                                        setTimeout(() => {
                                            setmobilePop(false);
                                        }, 200);
                                    }}
                                >
                                    Transaction
                                </span>
                                <div className="NavLineSeperator"></div>
                            </div>
                            <div className="AccountNav">
                                <span
                                    style={{
                                        color: accountSettings
                                            ? "#119702"
                                            : null,
                                    }}
                                    onClick={() => {
                                        setDeposit(false);
                                        setwithdrawal(false);
                                        setTransation(false);
                                        setAccountSettings(true);
                                        setTimeout(() => {
                                            setmobilePop(false);
                                        }, 200);
                                    }}
                                >
                                    Account Settings
                                </span>
                                <div className="NavLineSeperator"></div>
                            </div>
                        </div>
                    ) : null}
                    <span
                        className="SettingsPopUpClose"
                        onClick={handleClosePop}
                    >
                        <MdOutlineCancel className="MdOutlineCancel" />
                    </span>
                    <div className="SettingsNav">
                        <div className="SettingsNavHolder">
                            <div className="AccountNav">
                                <span
                                    style={{color: deposit ? "#119702" : null}}
                                    onClick={() => {
                                        setDeposit(true);
                                        setwithdrawal(false);
                                        setTransation(false);
                                        setAccountSettings(false);
                                    }}
                                >
                                    Deposit
                                </span>
                                <div className="NavLineSeperator"></div>
                            </div>
                            <div className="AccountNav">
                                <span
                                    style={{
                                        color: withdrawal ? "#119702" : null,
                                    }}
                                    onClick={() => {
                                        setDeposit(false);
                                        setwithdrawal(true);
                                        setTransation(false);
                                        setAccountSettings(false);
                                    }}
                                >
                                    Withdraw
                                </span>
                                <div className="NavLineSeperator"></div>
                            </div>
                            <div className="AccountNav">
                                <span
                                    style={{
                                        color: transation ? "#119702" : null,
                                    }}
                                    onClick={() => {
                                        setDeposit(false);
                                        setwithdrawal(false);
                                        setTransation(true);
                                        setAccountSettings(false);
                                    }}
                                >
                                    Transaction
                                </span>
                                <div className="NavLineSeperator"></div>
                            </div>
                            <div className="AccountNav">
                                <span
                                    style={{
                                        color: accountSettings
                                            ? "#119702"
                                            : null,
                                    }}
                                    onClick={() => {
                                        setDeposit(false);
                                        setwithdrawal(false);
                                        setTransation(false);
                                        setAccountSettings(true);
                                    }}
                                >
                                    Account Settings
                                </span>
                                <div className="NavLineSeperator"></div>
                            </div>
                        </div>
                    </div>

                    {/* <SettingsNav /> */}
                    {deposit ? (
                        <DepositSettings showMobilePop={showMobilePop} />
                    ) : withdrawal ? (
                        <WithdrawalSettings showMobilePop={showMobilePop} />
                    ) : transation ? (
                        <TransactionHistory />
                    ) : accountSettings ? (
                        <AccountSettings />
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default Account;
