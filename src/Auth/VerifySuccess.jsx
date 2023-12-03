import { useEffect } from "react";
import "./Success.css";
import { useNavigate } from 'react-router-dom';
import "./SuccessMobile.css";
// import { IoIosArrowBack } from 'react-icons/io';

const VerifySuccess = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/home');  
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);
    return (
        <div className="Success-container">
            <div className="Success-holder">
                <div className="Success-text">
                    <div className="Success-image"></div>

                    <p className="successp">
                        You have successfully created an account on{" "}
                        <span>Pier2pierbet</span> enjoy the best experience
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifySuccess;
