
import {useState} from "react";
import "./Create.css";
import "./CreateMobile.css";
import {IoIosArrowBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import axios from "axios";

const Create = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleNextClick = () => {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
        } else if (!password) {
            toast.error("Password cannot be empty");
        } else {
            const loading = toast.loading("Updating Password...");
            setLoading(true);
            const token = localStorage.getItem("resetToken");
            const url = `https://pier2pier.onrender.com/api/user/reset-password/${token}`;
            const data = {newPassword: password};
            axios
                .post(url, data)
                .then((response) => {
                    toast.dismiss(loading);
                    console.log(response);
                    toast.success(`${response?.data?.message}`);
                    setLoading(false);
                    setTimeout(() => {
                      navigate("/home");
                  }, 3000);
                })
                .catch((error) => {
                    console.log(error);
                    toast.dismiss(loading);
                    toast.error(`${error?.response?.data?.message}`);
                    setLoading(false);
                })
                
        }
    };

    return (
        <div className="Create-container">
            <Toaster />
            <div className="Create-holder">
                <div className="Create-Left">
                    <div className="Createtextholder">
                        <h1 className="Createtext">
                            ENJOY{" "}
                            <span className="Createallspan">THE MOST</span> EPL
                            MARKET IN{" "}
                            <span className="forgetallspan">NIGERIA</span>
                        </h1>
                    </div>

                    <div className="Createdownimage"></div>
                </div>

                <div className="Create-right">
                    <IoIosArrowBack className="arrow" />

                    <div className="Createinputholder">
                        <p className="Create-p-text">Create New Password</p>

                        <input
                            type="password"
                            className="Create-Input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setLoading(false);
                            }}
                        />
                        <input
                            type="password"
                            className="Create-Input"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setLoading(false);
                            }}
                        />

                        <button
                            className="Createbutton"
                            onClick={handleNextClick}
                            disabled={loading}
                            style={{}}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;