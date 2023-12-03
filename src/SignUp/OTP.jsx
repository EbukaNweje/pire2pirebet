// import React, { useRef, useState } from 'react'

// function OTP() {
//     const [otp, setOtp] = useState(['', '', '', '', ''])
//     const otpRef = useRef()
//     const getOTPdigits = (e) => {
//         setOtp(e.target.value)
//     }
//     console.log(otp)
//   return (
//     <div className='OTPPage'>
//         <div className='OTPPop'>
//            <div className='OTPPopHeader'>
//               <h2>OTP Verification</h2>
//               <span>Enter the OTP sent  to dika****@gmail.com</span>
//            </div>
//             <div className='OTPCodes'>
//                 {
//                     otp.map(()=>(
//                         <input type="text" 
//                         ref={otpRef}
//                         onChange={()=>getOTPdigits(e)}
//                         />
//                     ))
//                 }
//                 {/* <input type="text" />
//                 <input type="text" />
//                 <input type="text" />
//                 <input type="text" /> */}
//             </div>
//             <div className='ReceiveOTP'>
//                 <span>Didn't receive the OTP code? <span style={{cursor:"pointer"}}>Resend OTP</span></span>
//                 <button className='OTPVerifyBtn'>Verify</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default OTP


import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function OTP() {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const otpRefs = useRef([...Array(5)].map(() => React.createRef()));

  const getOTPdigits = (e, index) => {
    const value = e.target.value;

    if (value.length === 1 && index < 4) {
      otpRefs.current[index + 1].current.focus()
    }
      
    if (value === "" && index > 0) {
      otpRefs.current[index -1].current.focus();
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const navigate = useNavigate(); 
  

  const handleVerify = () =>{
    navigate('/home')
  }

  return (
    <div className='OTPPage'>
      <div className='OTPPop'>
        <div className='OTPPopHeader'>
          <h2>OTP Verification</h2>
          <span>Enter the OTP sent to dika****@gmail.com</span>
        </div>
        <div className='OTPCodes'>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={otpRefs.current[index]}
              onChange={(e) => getOTPdigits(e, index)}
            />
          ))}
        </div>
        <div className='ReceiveOTP'>
          <span>
            Didn&#39;t receive the OTP code?{' '}
            <span style={{ cursor: 'pointer' }}>Resend OTP</span>
          </span>
          <button className='OTPVerifyBtn'onClick={handleVerify}>Verify</button>
        </div>
      </div>
    </div>
  );
}

export default OTP;
