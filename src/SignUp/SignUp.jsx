import {NavLink} from "react-router-dom";
import "./SignUp.css";
import "./SignUpRes.css";
import icon from "./assets/icon.png";
import logoBody from "./assets/logoBody.png";
import logoPart from "./assets/logoPart2.png";
import {FiEye} from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {ClipLoader} from "react-spinners";
import axios from "axios";
// import {toast} from "react-toastify";
import toast, {Toaster} from "react-hot-toast";

function SignUp() {
    const nav = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthDay, setBirthDay] = useState();
    const [birthMonth, setBirthMonth] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [fanClub, setFanClub] = useState("");
    const [error, setError] = useState({errorState: false, errMessage: ""});
    const [loading, setLoading] = useState(false);

    if (email) {
        localStorage.setItem("email", email);
    }

    const handleMailSender = () => {
        // toast.loading("generating OTP code")
        const url = "https://pier2pier.onrender.com/api/signupmail";
        const data = {email: email};
        axios
            .post(url, data)
            .then((response) => {
                console.log(response);
                toast.success(`${response.data.message}`);
                setTimeout(() => {
                    nav(`/register-info/${data.email}`);
                }, 5000);
            })
            .catch((error) => {
                console.log(error);
                toast.error("Error sending code, please try again");
            });
    };

    const handleSignUp = () => {
        setLoading(true);
        if (!firstName) {
            setLoading(false);
            setError({errorState: true, errMessage: "Input First Name"});
        } else if (!lastName) {
            setLoading(false);
            setError({errorState: true, errMessage: "Input Last Name"});
        } else if (!email) {
            setLoading(false);
            setError({errorState: true, errMessage: "Input Email Address"});
        } else if (!email.includes("@")) {
            setLoading(false);
            setError({errorState: true, errMessage: "Email must contain @"});
        } else if (!password) {
            setLoading(false);
            setError({errorState: true, errMessage: "Input Password"});
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                password
            )
        ) {
            setLoading(false);
            setError({
                errorState: true,
                errMessage:
                    "* Password must contain uppercase, lowercase, digit, and special character",
            });
        } else if (password !== confirmPassword) {
            setLoading(false);
            setError({errorState: true, errMessage: "Passwords do not match"});
        } else if (!birthDay || !birthMonth || !birthYear) {
            setLoading(false);
            setError({errorState: true, errMessage: "Select Birth Date"});
        } else {
            setLoading(true);
            const url = "https://pire2pirebet-back-end.vercel.app/api/sign-up";
            const data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                confirmPassword: confirmPassword,
                password: password,
                birthday: {day: birthDay, month: birthMonth, year: birthYear},
                fanClub: fanClub
            };
            toast.loading("Creating User...");
            axios
                .post(url, data)
                .then((response) => {
                    toast.success(
                        `User created successfully ${response.data.message}`
                    );
                    localStorage.setItem(
                        "verifyToken",
                        response?.data?.data?.token
                    );
                    console.log(response);
                    const created = true;
                    if (created) {
                        handleMailSender();
                    } else {
                        console.log("Error Creating User");
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                    toast.error(`${error?.response?.data?.message}`);
                });
        }
    };

    return (
        <div className="SignUpPage">
            <Toaster toastOptions={{duration: 4000}} />

            <div className="SignUpPop">
                <div className="SignUpImg">
                    <img className="LogoBody" src={logoBody} alt="" />
                    <div className="EnjoyText">
                        <span>ENJOY</span>
                        <span style={{color: "#DCC708"}}>THE MOST</span>{" "}
                        <span>EPL</span> <span> MARKET </span>
                        <span>IN</span>
                        <span style={{color: "#DCC708"}}>NIGERIA</span>
                    </div>
                    <img className="LogoPart" src={logoPart} alt="" />
                </div>
                <div className="SignUpForm">
                    <div className="SignUpFormHeader">
                        <img src={icon} alt="" />
                        <span>
                            Your Details should appear the same with your Bank
                            Account
                        </span>
                    </div>
                    {error.errorState === true ? (
                        <>
                            <div
                                className="SignUpErrorDiv"
                                style={{
                                    width: "100%",
                                    height: "maxContent",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: "red",
                                    padding: "7px",
                                }}
                            >
                                <p style={{color: "white", fontSize: "12px"}}>
                                    {error.errMessage}
                                </p>
                            </div>
                        </>
                    ) : null}
                    <div className="SignUPFormData">
                        <div className="SignUpInputs">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                    setError((prevState) => ({
                                        ...prevState,
                                        errorState: false,
                                        errMessage: "",
                                    }));
                                }}
                            />
                        </div>
                        <div className="SignUpInputs">
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                    setError((prevState) => ({
                                        ...prevState,
                                        errorState: false,
                                        errMessage: "",
                                    }));
                                }}
                            />
                        </div>
                        <div className="SignUpInputs">
                            <input
                                type="text"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError((prevState) => ({
                                        ...prevState,
                                        errorState: false,
                                        errMessage: "",
                                    }));
                                }}
                            />
                        </div>
                        <div className="SignUpInputs">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError((prevState) => ({
                                        ...prevState,
                                        errorState: false,
                                        errMessage: "",
                                    }));
                                }}
                            />
                            <FiEye className="ShowPaswordIcon" />
                        </div>
                        <div className="SignUpInputs">
                            <input
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setError((prevState) => ({
                                        ...prevState,
                                        errorState: false,
                                        errMessage: "",
                                    }));
                                }}
                            />
                            <FiEye className="ShowPaswordIcon" />
                        </div>
                        <div className="SignUpDateInputs">
                            <span>Birth Day</span>
                            <div className="DateInput">
                                {/* Day Select */}
                                <select
                                    style={{color: "#000"}}
                                    value={birthDay}
                                    onChange={(e) => {
                                        setBirthDay(e.target.value);
                                        setError((prevState) => ({
                                            ...prevState,
                                            errorState: false,
                                            errMessage: "",
                                        }));
                                    }}
                                >
                                    {[...Array(31).keys()].map((day) => (
                                        <option key={day + 1} value={day + 1}>
                                            {day + 1}
                                        </option>
                                    ))}
                                </select>

                                {/* Month Select */}
                                <select
                                    style={{color: "#000"}}
                                    value={birthMonth}
                                    onChange={(e) => {
                                        setBirthMonth(e.target.value);
                                        setError((prevState) => ({
                                            ...prevState,
                                            errorState: false,
                                            errMessage: "",
                                        }));
                                    }}
                                >
                                    {[
                                        "January",
                                        "February",
                                        "March",
                                        "April",
                                        "May",
                                        "June",
                                        "July",
                                        "August",
                                        "September",
                                        "October",
                                        "November",
                                        "December",
                                    ].map((month, index) => (
                                        <option key={index + 1} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                              

                                {/* Year Input */}
                                <input
                                    type="number"
                                    maxLength={4}
                                    style={{color: "#000"}}
                                    placeholder="YYYY"
                                    value={birthYear}
                                    onChange={(e) => {
                                        setBirthYear(e.target.value);
                                        setError((prevState) => ({
                                            ...prevState,
                                            errorState: false,
                                            errMessage: "",
                                        }));
                                    }}
                                />
                            </div>
                            
                        </div>
                        <div style={{width:'100%', height:'50px'}}>
                        <select
                                    style={{color: "#000", width:'100%', height:'90%'}}
                                    value={fanClub}
                                    onChange={(e) => {
                                        setFanClub(e.target.value);
                                        setError((prevState) => ({
                                            ...prevState,
                                            errorState: false,
                                            errMessage: "",
                                        }));
                                    }}
                                >
                                    {[
                                        "Chelsea",
                                        "Barca",
                                        "Madrid",
                                        "Man Utd",
                                        "Liverpool",
                                        "Man City",
                                        "Bayern",
                                        "Arsenal",
                                        
                                    ].map((club, index) => (
                                        <option key={index + 1} value={club}>
                                            {club}
                                        </option>
                                    ))}
                                </select>
                        </div>
                    </div>

                    <div className="SignUpBtnDiv">
                        <button className="SignUpBtn" onClick={handleSignUp}>
                            {loading ? (
                                <ClipLoader color="#36d7b7" />
                            ) : (
                                "Continue"
                            )}
                        </button>
                    </div>
                    <div className="LoginRoute">
                        <span>
                            Already have an account?{" "}
                            <NavLink to={"/home"}>
                                <span
                                    style={{
                                        color: "#119702",
                                        cursor: "pointer",
                                    }}
                                >
                                    Login
                                </span>
                            </NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
