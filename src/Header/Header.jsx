import React, { useState} from 'react'
import "./Header.css"
import LoginPage from '../Login/Login';
import {useNavigate} from "react-router-dom"
function Header() {
    const navigate = useNavigate()
    const [showLogin, setShowLogin] = useState(false);
    const Login = (
        showLogin && (
            <LoginPage />
        )
    )
    const handleLoginClick = () => {
        setShowLogin(!showLogin)
    }
    return (
        <>
                <div className='Header_Main'>
                    <div className='Header_Main_Wrap'>
                        <div className='HeaderGames'>
                            <p className=''>Games</p>
                        </div>
                        <div className='HeaderLogoWrap'>
                            <img src='/Logo2.png' alt='' className='HeaderLogo' />
                        </div>
                        <div className='HeaderNavigation'>
                            <p className='Header_Register' onClick={()=> navigate('/signup')}>Register</p>
                            <p className='Header_Forgot_Password' onClick={()=>navigate('/forgetpassword')}>Forgotten password?</p>
                            <button className='Header_Login_Button' onClick={handleLoginClick}>Login</button>
                            {showLogin && Login}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Header