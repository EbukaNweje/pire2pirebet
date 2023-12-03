
import { NavLink } from 'react-router-dom'
import './SignUp.css'
import './SignUpRes.css'
import icon from './assets/icon.png'
import logoBody from './assets/logoBody.png'
import logoPart from './assets/logoPart2.png'
import { FiEye } from "react-icons/fi";
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const nav = useNavigate()

    const handleSignUp = () =>{
        nav('/register-info')
    }

  return (
    <div className='SignUpPage'>
        <div className='SignUpPop'>
            <div className='SignUpImg'>
                <img className='LogoBody' src={logoBody} alt="" />
                <div className='EnjoyText'>
                <span>ENJOY</span><span style={{color:"#DCC708"}}>THE MOST</span> <span>EPL</span> <span> MARKET </span><span>IN</span><span style={{color:"#DCC708"}}>NIGERIA</span>
                </div>
                <img className='LogoPart' src={logoPart} alt="" />
            </div>
            <div className='SignUpForm'>
                <div className='SignUpFormHeader'>
                    <img src={icon} alt="" />
                    <span>Your Details should appear the same  with Bank your Account</span>
                </div>
                <div className='SignUPFormData'>
                    <div className='SignUpInputs'>
                        <input type="text" placeholder='First Name' />
                    </div>
                    <div className='SignUpInputs'>
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div className='SignUpInputs'>
                        <input type="text" placeholder='Email Address' />
                    </div>
                    <div className='SignUpInputs'>
                        <input type="text" placeholder='Password' />
                        <FiEye className='ShowPaswordIcon'/>
                    </div>
                    <div className='SignUpDateInputs'>
                      <span>Birth Day</span>
                        <div className='DateInput'>
                          <input type='text' placeholder='DD' />
                          <input type='text' placeholder='MM' />
                          <input type='text' placeholder='YYYY' />
                        </div>
                    </div>
                </div>

                <div className='SignUpBtnDiv'>
                    <button className='SignUpBtn' onClick={handleSignUp}>Continue</button>
                </div>
                <div className='LoginRoute'>
                    <span>Already have an account? <NavLink to={'/home'}><span style={{color:"#119702", cursor:'pointer'}} >Login</span></NavLink></span>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default SignUp