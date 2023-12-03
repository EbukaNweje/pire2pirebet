import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const LandingPage = () => {
  const nav = useNavigate()

  const handleShowWelcome = () =>{
    setTimeout(() => {
      nav('/signup')
    }, 3000);
  }

  useEffect(()=>{
    handleShowWelcome()
  },[])

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage