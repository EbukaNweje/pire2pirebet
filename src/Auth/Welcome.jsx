import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeMobile.css';  
import './Welcome.css';  
import 'animate.css';    
import logo from '.././assets/PierLogo.svg'

const Welcome = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/home');  
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className='welcome-container'>
      <div className='welcome-opacity'>
        <div className='welcome-image'><img src={logo} alt="" /></div>
        <h3 className='animate__animated animate__bounce'>
          Get ready for an unparalleled excitement <br></br>of winning big.
        </h3>
      </div>
    </div>
  );
}

export default Welcome;
