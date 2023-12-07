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
import toast, {Toaster} from "react-hot-toast";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { userData, isLoggedInUser,logOut  } from "../Redux/Features";
// import {FaHamburger} from "react-icons/fa";
// import {FaAngleDown} from "react-icons/fa6";
// import {MdOutlineSportsSoccer} from "react-icons/md";

const HomeHeader = ({accPops, handleChelseaFan, ShowFanPicksA, handlePoolFan ,handleArsenalFan,handleBarcaFan , handleManUFan, handleCityFan, handleMadridFan}) => {
    const [openSide, setOpenSide] = useState(false);

    const handleOpenSideBar = () => {
        setOpenSide(!openSide);
    };
    

    // const [isUser, setIsUser] = useState(true);
    // console.log(isUser);
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
    const handleShowChelseaFan = () => {
        handleOpenSideBar();
        handleChelseaFan();
    };
    const handleShowBarcaFan = () => {
        handleOpenSideBar();
        handleBarcaFan();
    };
    const handleShowMadridFan = () => {
        handleOpenSideBar();
        handleMadridFan();
    };
    const handleShowManUFan = () => {
        handleOpenSideBar();
        handleManUFan();
    };
    const handleShowPoolFan = () => {
        handleOpenSideBar();
        handlePoolFan();
    };
    const handleShowArsenalFan = () => {
        handleOpenSideBar();
        handleArsenalFan();
    };
    const handleShowCity = () => {
        handleOpenSideBar();
        handleCityFan();
    };

    const handleShowMainContent = () => {
        handleOpenSideBar();
        ShowFanPicksA();
    };

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);
      //   const [error, setError] = useState(false)
      const nav = useNavigate()
      const dispatch = useDispatch()

      if (email){
        localStorage.setItem("email", email)
    }

      const handleResendOTP = () =>{
        // toast.loading("generating OTP code")
        toast.loading("Generating OTP...")
        const url = "https://pier2pier.onrender.com/api/user/resend-verification-otp"
        const data = {email:email}
        axios.post(url, data)
             .then((response)=>{
                console.log(response);
                toast.success(`${response.data.message}`)
                localStorage.setItem("verifyToken", response.data.token)
                setTimeout(() => {
                    nav(`/register-info/${data.email}`);
                }, 2000);
             })
             .catch((error)=>{
                console.log(error);
                toast.error("Error sending code, please try again")
             })
    }

    const handleLogIn = (e) => {
        e.preventDefault()
          setLoading(true);
          if (email === "" || password === "") {
              // alert('Please enter all fields to log in')
              setLoading(false);
              toast.error("Please enter all fields to log in");
          } else {
              setLoading(true);
              const loadingToast = toast.loading("Logging In...")
              const url =
                  "https://pire2pirebet-back-end.vercel.app/api/sign-in";
              const data = {email: email, password: password};
              axios
                  .post(url, data)
                  .then((response) => {
                      dispatch(userData(response.data))
                      dispatch(isLoggedInUser(true))
                      console.log(response);
                      toast.success(`Welcome back ${response.data.user.firstName}`);
                      setLoading(false)
                      toast.dismiss(loadingToast);
                  })
                  .catch((error) => {
                      console.log(error);
                      toast.error(`${error.response.data.message}`);
                      setLoading(false);
                      if (error.response.data.message === "Email Not Verified, Please verify your email to log in."){
                        handleResendOTP()
                      }
                  });
          }
      };

      const user = useSelector((state) => state.Pier.user);
      const handleLogout = () =>{
        const loadingToast = toast.loading("logging out...")
        const url = 'https://pire2pirebet-back-end.vercel.app/api/sign-out'
        const token = user.token;
        const data = {
            signOut: "SignOut User"}
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.post(url, data, {headers})
             .then((response)=>{
                toast.dismiss(loadingToast);
                console.log(response);
                dispatch(logOut())
                dispatch(isLoggedInUser(false))
                toast.success(response.data.message)
                setShowDrop(false)
             })
             .catch((error)=>{
                console.log(error);
             })
      }

      console.log(user);
      
      const isLoggedIn = useSelector((state) => state.Pier.isLoggedIn);
    console.log(isLoggedIn);


    return (
        <div className="HomeHeader">
            <Toaster toastOptions={{duration: 4000}} />
            {accPop ? <Account accPops={handleCloseAccountPopup} /> : null}
            <div className="HeaderHam" onClick={handleOpenSideBar}>
                Games
            </div>
            <div className="HomeHeaderLogo">
                <img src={Logo} alt="" />
            </div>
            <div className="HeaderTextL">
                {isLoggedIn ? (
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
                                            <p>{user?.user?.firstName}</p>
                                            <p>ID:{user?.user?._id.slice(0, 6).toUpperCase()}</p>
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
                                        <div className="HeaderTextLMyaccContentsE" onClick={handleLogout}>
                                            Logout
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </>
                ) : (
                    <>
                        <NavLink to={"/register"}>
                            <p>Register</p>
                        </NavLink>
                        {/* <h6>Forget Password</h6> */}
                        <button onClick={handleShowDrop}>Login</button>
                        {showDrop ? (
                            <>
                                <div className="HeaderTextLDrop">
                                    <div className="HeaderTextLDropA">
                                        <p>Email Address</p>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="HeaderTextLDropB">
                                        <p>Password</p>
                                        <div className="HeaderTextLDropBInputDiv">
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                            <FaEye className="FaEye" />
                                        </div>
                                    </div>
                                    <div className="HeaderTextLDropC">
                                        <button
                                            onClick={handleLogIn}
                                            disabled={loading}
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <div className="HeaderTextLDropD">
                                        Forget your password?
                                        <NavLink to={"/forget-password"}>
                                            <span>request to change</span>
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
                    <div
                        className="HomeMainContentsALinksItem"
                        onClick={handleShowMainContent}
                    >
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
                                onClick={handleShowChelseaFan}
                            >
                                Chelsea
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowBarcaFan}
                            >
                                Barcelona
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowMadridFan}
                            >
                                Real Madrid
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowManUFan}
                            >
                                Manchester United
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowPoolFan}
                            >
                                Liverpool
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowArsenalFan}
                            >
                                Arsenal
                            </div>
                            <div
                                className="HomeMainContentsALinksItemFP1"
                                onClick={handleShowCity}
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
