import React from 'react';
import './Forget.css';
import './ForgetMobile.css';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom'; 

const Forget = () => {
  const navigate = useNavigate(); 

  const handleNextClick = () => {
    navigate('/create-new-password');
  };

  return (
    <div className='Forget-container'>
      <div className='forget-holder'>

        <div className='forget-Left'>

          <div className='forgettextholder'>

            <h1 className='forgettext'>

              ENJOY <span className='forgetallspan'>THE MOST</span> EPL MARKET IN{' '}
              <span className='forgetallspan'>NIGERIA</span>

            </h1>
          </div>

          <div className='forgetdownimage'></div>

        </div>

        <div className='forget-right'>

          <IoIosArrowBack className='arrow' onClick={()=>navigate("/home")} style={{cursor:'pointer'}}/>

          <div className='forgetinputholder'>

            <p className='forget-p-text'>Forget Password?</p>

            <input type='text' className='forget-Input' placeholder='Email Address' />

            <button className='forgetbutton' onClick={handleNextClick}>
              Next
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
