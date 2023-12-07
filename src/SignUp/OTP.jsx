

import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import axios from "axios";
import {Modal} from "antd";
// import toast from "react-toastify";
import toast, {Toaster} from "react-hot-toast";


function OTP() {
    const [loading, setLoading] = useState(false);
    const [inputErr, setInputErr] = useState(true);
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const [modalVisible, setModalVisible] = useState(false);

    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");

    const focusNextInput = (currentIndex) => {
        if (currentIndex < inputRefs.length - 1) {
            inputRefs[currentIndex + 1].current.focus();
        }
    };

    const handleInputChange = (e, currentIndex) => {
        const {value} = e.target;

        if (!/^[0-9]+$/.test(value)) {
            showModal();
            return;
        }

        if (currentIndex === 0) {
            setInputValue1(value);
        } else if (currentIndex === 1) {
            setInputValue2(value);
        } else if (currentIndex === 2) {
            setInputValue3(value);
        } else if (currentIndex === 3) {
            setInputValue4(value);
        } else if (currentIndex === 4) {
            setInputValue5(value);
            setInputErr(false);
        }

        if (value && currentIndex < inputRefs.length - 1) {
            focusNextInput(currentIndex);
        }
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text");

        if (/^\d{5}$/.test(pastedText)) {
            const digits = pastedText.split("");

            inputRefs.forEach((inputRef, index) => {
                if (index < digits.length) {
                    inputRef.current.value = digits[index];

                    if (index === 0) {
                        setInputValue1(digits[index]);
                    } else if (index === 1) {
                        setInputValue2(digits[index]);
                    } else if (index === 2) {
                        setInputValue3(digits[index]);
                    } else if (index === 3) {
                        setInputValue4(digits[index]);
                    } else if (index === 4) {
                        setInputValue5(digits[index]);
                        setInputErr(false);
                    }
                }
            });

            if (digits.length > 0) {
                focusNextInput(digits.length - 1);
            }
        }
    };

    const handleKeyDown = (e, currentIndex) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            if (currentIndex > 0) {
                inputRefs[currentIndex - 1].current.focus();
            } else {
                inputRefs[currentIndex].current.focus();
            }

            inputRefs[currentIndex].current.value = "";

            // Clear the corresponding inputValue state variable based on the currentIndex
            if (currentIndex === 0) {
                setInputValue1("");
                setInputErr(true);
            } else if (currentIndex === 1) {
                setInputValue2("");
                setInputErr(true);
            } else if (currentIndex === 2) {
                setInputValue3("");
                setInputErr(true);
            } else if (currentIndex === 3) {
                setInputValue4("");
                setInputErr(true);
            } else if (currentIndex === 4) {
                setInputValue5("");
                setInputErr(true);
            }
        }
    };

    const otp = `${inputValue1}${inputValue2}${inputValue3}${inputValue4}${inputValue5}`;
    // console.log(otp);
    const navigate = useNavigate();
    const token = localStorage.getItem("verifyToken");
    const email = localStorage.getItem("email");
    // console.log(email);

    const handleVerify = () => {
        setLoading(true);
        if (!otp) {
            alert("Please enter the OTP");
        } else {
            const url = `https://pier2pier.onrender.com/api/user/verify/${token}`;
            const data = {otp: otp};
            axios
                .post(url, data)
                .then((response) => {
                    console.log(response);
                    toast.success(`${response.data.message}`);
                    setLoading(false);
                    setTimeout(() => {
                        navigate("/home");
                    }, 3000);
                })
                .catch((error) => {
                    console.log(error);
                    toast.error(`${error.response.data.message}`);
                    setLoading(false);
                });
        }
    };

    const handleResendVerify = () => {
        toast.success("Requesting code...");
        const url = `https://pier2pier.onrender.com/api/user/resend-verification-otp`;
        const data = {email: email};
        axios
            .post(url, data)
            .then((response) => {
                console.log(response);
                toast.success(`${response.data.message}`);
            })
            .catch((error) => {
                console.log(error);
                toast.error(`${error.response.data.message}`);
            });
    };

    return (
        <div className="OTPPage">
            <Toaster toastOptions={{duration: 4000}} />
            <div className="OTPPop">
                <div className="OTPPopHeader">
                    <h2>OTP Verification</h2>
                    <span>Enter the OTP sent to {email}</span>
                </div>
                <div className="OTPCodes" onPaste={handlePaste}>
                    {inputRefs.map((inputRef, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            ref={inputRef}
                            onChange={(e) => handleInputChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onInput={(e) => {
                                const newValue = e.target.value.replace(
                                    /\D/g,
                                    ""
                                );
                                e.target.value = newValue;
                                handleInputChange(e, index);
                            }}
                        />
                    ))}
                </div>
                <div className="ReceiveOTP">
                    <span>
                        Didn&#39;t receive the OTP code?{" "}
                        <span
                            style={{cursor: "pointer"}}
                            onClick={handleResendVerify}
                        >
                            Resend OTP
                        </span>
                    </span>
                    <button
                        className="OTPVerifyBtn"
                        onClick={handleVerify}
                        disabled={inputErr}
                    >
                        {loading ? <ClipLoader color="#36d7b7" /> : "Continue"}
                    </button>
                </div>
            </div>
            <Modal
                title="Invalid Input"
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                The code sent to your email should contain 4 digit numbers only.
                No alphabets or special characters are allowed. Please check and
                try again.
            </Modal>
        </div>
    );
}

export default OTP;
