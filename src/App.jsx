// import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './SignUp/SignUp'
// import ForgetPassword from './SignUp/Forgetppassword'
// import WelcomePage from './LandingPage/LandingPage'
import HomePage from './HomePage/HomePage'
import Welcome from './Auth/Welcome'
import EmailSent from './SignUp/EmailSent'
import OTP from './SignUp/OTP'
import HomeOdds from "./HomePage/HomeOdds";
import Forget from './Auth/Forget'
import Create from './Auth/Create'
function App() {

  return (
      <div className="App_Main">
          <Router>
              <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/register" element={<SignUp />} />
                  <Route path="/register-info/:email" element={<EmailSent />} />
                  <Route path="/verify-otp" element={<OTP />} />
                  <Route path="/more-odds" element={<HomeOdds />} />
                  <Route path="/forget-password" element={<Forget />} />
                  <Route path="/create-new-password" element={<Create />} />
                  {/* <Route path="/create-new-password-success" element={<Create />} /> */}
              </Routes>
          </Router>
      </div>
  );
}

export default App
