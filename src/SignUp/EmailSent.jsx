import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';


function EmailSent() {

  const { email } = useParams();
  console.log(email);
  const nav = useNavigate()
  const handleNext = ()=>{
    nav("/verify-otp")
  }
  return (
    <div className='EmailSentPage'>
        <div className='EmailSentPop'>
            <h2>Your Email Sent Successfully</h2>
            <span>A verification Email OTP has been sent to {email}  </span>
            <button className='EmailSentNextBtn' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default EmailSent