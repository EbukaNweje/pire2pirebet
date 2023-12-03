import React from 'react'

function SettingsNav() {
  return (
            <>
                <div className='SettingsNav'>
                    <div className='SettingsNavHolder'>
                        <div className='AccountNav'>
                            <span>Deposit</span>
                            <div className='NavLineSeperator'></div>
                        </div>
                        <div className='AccountNav'>
                            <span>Withdraw</span>
                            <div className='NavLineSeperator'></div>
                        </div>
                        <div className='AccountNav'>
                            <span>Transaction</span>
                            <div className='NavLineSeperator'></div>
                        </div>
                        <div className='AccountNav'>
                            <span>Account Settings</span>
                            <div className='NavLineSeperator'></div>
                        </div>
                    </div>

                </div>
            </>
  )
}

export default SettingsNav