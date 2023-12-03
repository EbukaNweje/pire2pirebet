import './Account.css'

function AccountSettings() {
  return (
    <>
        <div className='SettingsNavPage'>
              <div className='NavPageHeader'>
                  <span>Account Settings</span>
              </div>
              <div className='NavPageContent'>
                  <div className='ContentInfo'>
                      <span>BITCOIN Address</span>
                      <input type="text" className='SettingsInput'/>
                      <p className='PasteText'>Paste</p>
                  </div>
                  <div className='ContentInfo'>
                      <span>Email Address</span>
                      <input type="text" className='SettingsInput'/>
                  </div>
                  <div className='ContentInfo'>
                      <span>First Name</span>
                      <input type="text" className='SettingsInput'/>
                  </div>
                  <div className='ContentInfo'>
                      <span>Last Name</span>
                      <input type="text" className='SettingsInput'/>
                  </div>
                  <div className='ContentInfoBtn'>
                      <button className='SaveAccountBtn'>Save</button>
                  </div>
            </div>
        </div>
    </>
  )
}

export default AccountSettings