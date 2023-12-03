import "./HomeHeader.css";
import ".././HomePage/HomePage.css";
import Logo from "../assets/PierLogo.svg";
import {useState} from "react";
import {FaAngleDown} from "react-icons/fa6";
import {MdOutlineSportsSoccer} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {FaEye} from "react-icons/fa";
import {FaRegUserCircle} from "react-icons/fa";
import Account from "../Settings/Account";
// import {FaHamburger} from "react-icons/fa";
// import {FaAngleDown} from "react-icons/fa6";
// import {MdOutlineSportsSoccer} from "react-icons/md";

const HomeHeader = ({accPops, showFanC, ShowFanPicksA}) => {
    const [openSide, setOpenSide] = useState(false);

    const handleOpenSideBar = () => {
        setOpenSide(!openSide);
    };

    const [isUser, setIsUser] = useState(false);
    console.log(setIsUser);
    const [showDrop, setShowDrop] = useState(false);

    const handleShowDrop = () => {
        setShowDrop(!showDrop);
    };

    const [showAcc, setShowAcc] = useState(false);

    const handleShowMyACc = () => {
        setShowAcc(!showAcc);
    };

    const [accPop, setAccPop] = useState(false);

    const handleAccPopup = () => {
        setAccPop(!accPop);
    };

    const handleCloseAccountPopup = () => {
        setAccPop(false);
        // Call the function passed as a prop to handle the closing of the popup
        accPops(false);
      };

      const [showFanDropDown, setShowFanDropdown] = useState(false);
    //   const [showFanContent, setShowFanContent] = useState(false);

      const handleShowFanDrop = () => {
          setShowFanDropdown(!showFanDropDown);
      };
      const handleShowFanContent = () => {
          handleOpenSideBar();
          showFanC()
      };

      const handleShowMainContent = () =>{
        handleOpenSideBar()
        ShowFanPicksA()
      }
      

    return (
        <div className="HomeHeader">
            {accPop ? <Account accPops={handleCloseAccountPopup} /> : null}
            <div className="HeaderHam" onClick={handleOpenSideBar}>
                Games
            </div>
            <div className="HomeHeaderLogo">
                <img src={Logo} alt="" />
            </div>
            <div className="HeaderTextL">
                {!isUser ? (
                    <>
                        <div
                            className="HeaderTextLMyacc"
                            onClick={handleShowMyACc}
                        >
                            <span>
                                <FaRegUserCircle className="FaRegUserCircle" />
                            </span>{" "}
                            My account
                            {showAcc ? (
                                <>
                                    {" "}
                                    <div className="HeaderTextLMyaccContents">
                                        <div className="HeaderTextLMyaccContentsA">
                                            <p>Ebuka Eze</p>
                                            <p>ID:11949774</p>
                                        </div>
                                        <div className="HeaderTextLMyaccContentsB">
                                            <p>WITHDRAWABLE</p>
                                            <p>$200</p>
                                        </div>
                                        <div
                                            className="HeaderTextLMyaccContentsC"
                                            onClick={handleAccPopup}
                                        >
                                            My Account
                                        </div>
                                        <div className="HeaderTextLMyaccContentsD">
                                            My Slip
                                        </div>
                                        <div className="HeaderTextLMyaccContentsE">
                                            Logout
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </>
                ) : (
                    <>
                        <NavLink to={"/signup"}>
                            <p>Register</p>
                        </NavLink>
                        <h6>Forget Password</h6>
                        <button onClick={handleShowDrop}>Login</button>
                        {showDrop ? (
                            <>
                                <div className="HeaderTextLDrop">
                                    <div className="HeaderTextLDropA">
                                        <p>Email Address</p>
                                        <input type="email" />
                                    </div>
                                    <div className="HeaderTextLDropB">
                                        <p>Password</p>
                                        <div className="HeaderTextLDropBInputDiv">
                                            <input type="password" />
                                            <FaEye className="FaEye" />
                                        </div>
                                    </div>
                                    <div className="HeaderTextLDropC">
                                        <button>Login</button>
                                    </div>
                                    <div className="HeaderTextLDropD">
                                        Don&#39;t have an account yet?{" "}
                                        <NavLink to={"/register"}>
                                            <span>Register now</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </>
                )}
            </div>
            <div className={`HomeSideDrawer ${openSide ? "active" : ""}`}>
                <div className="HomeMainContentsALinks">
                    <div className="HomeMainContentsALinksItem" onClick={handleShowMainContent}>
                        <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                        <p>UEFA Champions League</p>
                    </div>
                    <div className="HomeMainContentsALinksItem">
                        <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                        <p>UEFA Champions League</p>
                    </div>
                    <div className="HomeMainContentsALinksItem">
                        <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                        <p>UEFA Champions League</p>
                    </div>
                    <div className="HomeMainContentsALinksItem">
                        <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                        <p>UEFA Champions League</p>
                    </div>
                    <div className="HomeMainContentsALinksItem">
                        <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                        <p>UEFA Champions League</p>
                    </div>
                    <div className="HomeMainContentsALinksItem">
                        <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                        <p>UEFA Champions League</p>
                    </div>
                    <div className="HomeMainContentsALinksItem">
                        <MdOutlineSportsSoccer className="HomeMainContentsALinksItemIcon" />
                        <p>UEFA Champions League</p>
                    </div>

                    <div className="HomeMainContentsALinksItemFan">
                        <div
                            className="HomeMainContentsALinksItemP"
                            onClick={handleShowFanDrop}
                        >
                            <p>View Fan Page</p>
                            <FaAngleDown />
                        </div>
                        <div
                            className={`HomeMainContentsALinksItemFP ${
                                showFanDropDown ? "show" : ""
                            }`}
                        >
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowFanContent}
                            >
                                Chelsea
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowFanContent}
                            >
                                Barcelona
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowFanContent}
                            >
                                Real Madrid
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowFanContent}
                            >
                                Manchester United
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowFanContent}
                            >
                                Liverpool
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowFanContent}
                            >
                                Arsenal
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowFanContent}
                            >
                                Man City
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
