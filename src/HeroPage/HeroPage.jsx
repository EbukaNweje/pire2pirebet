import React from 'react'
import Header from '../Header/Header'
import "./HeroPage.css"
function HeroPage() {
    return (
        <div className='Hero_Main_Page'>
            <div className='Hero_Page_Wrap'>
                <img src='/Logo2.png' alt="PierLogo" className='PierLogo'/>
                <p className='Heropage_Text'>
                    Get ready for an unparalleled excitement<br/>
                    of winning big.
                </p>
            </div>
        </div>
    )
}

export default HeroPage