import {useNavigate} from 'react-router-dom'


function EmailSent() {

  const nav = useNavigate()
  const handleNext = ()=>{
    nav("/verify-otp")
  }
  return (
    <div className='EmailSentPage'>
        <div className='EmailSentPop'>
            <h2>Your Email Sent Successfully</h2>
            <span>A verification Email OTP has been sent to this Email dika******@gmail.com  </span>
            <button className='EmailSentNextBtn' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default EmailSent