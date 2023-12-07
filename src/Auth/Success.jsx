
import './Success.css'
import './SuccessMobile.css'
import { IoIosArrowBack } from 'react-icons/io';

const Success = () => {
  return (
    <div className='Success-container'>
        <IoIosArrowBack className='arrow2' />

        <div className='Success-holder'>


            <div className='Success-text'>
            <div className='Success-image'></div>

            <p className='successp'>Payment Successful</p>
            <p className='successptage'>0.000925</p>

            </div>

            <button className='success-button'>View</button>

        </div>
    </div>
  )
}

export default Success