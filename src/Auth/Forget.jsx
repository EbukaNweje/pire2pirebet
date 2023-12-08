import {useState} from "react";
import "./Forget.css";
import "./ForgetMobile.css";
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import axios from "axios";

const Forget = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const handleNextClick = () => {
      if (!email) {
        toast.error("input email");
      } else {
          const loading = toast.loading("Sending link to mail...");
            const url =
                "https://pier2pier.onrender.com/api/user/forgot-password";
            const data = {email: email};
            axios
                .post(url, data)
                .then((response) => {
                    toast.dismiss(loading);
                    console.log(response);
                    toast.success(`${response?.data?.message}`);
                    localStorage.setItem("resetToken", response?.data?.token)
                    setTimeout(() => {
                        navigate("/create-new-password");
                    }, 2000);
                })
                .catch((error) => {
                    toast.dismiss(loading);
                    toast.error(`${error?.response?.data?.message}`);
                    console.log(error);
                });
        }
    };
    // navigate('/create-new-password');

    return (
        <div className="Forget-container">
            <Toaster />
            <div className="forget-holder">
                <div className="forget-Left">
                    <div className="forgettextholder">
                        <h1 className="forgettext">
                            ENJOY{" "}
                            <span className="forgetallspan">THE MOST</span> EPL
                            MARKET IN{" "}
                            <span className="forgetallspan">NIGERIA</span>
                        </h1>
                    </div>

                    <div className="forgetdownimage"></div>
                </div>

                <div className="forget-right">
                    <IoIosArrowBack
                        className="arrow"
                        onClick={() => navigate("/home")}
                        style={{cursor: "pointer"}}
                    />

                    <div className="forgetinputholder">
                        <p className="forget-p-text">Forget Password?</p>

                        <input
                            type="text"
                            className="forget-Input"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            className="forgetbutton"
                            onClick={handleNextClick}
                            style={{cursor: "pointer"}}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forget;
