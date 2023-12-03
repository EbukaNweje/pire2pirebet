
import './Create.css';
import './CreateMobile.css';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom'; 

const Forget = () => {
  const navigate = useNavigate(); 

  const handleNextClick = () => {
    navigate('/Success');
  };

  return (
    <div className='Create-container'>
      <div className='Create-holder'>

        <div className='Create-Left'>

          <div className='Createtextholder'>

            <h1 className='Createtext'>

              ENJOY <span className='Createallspan'>THE MOST</span> EPL MARKET IN{' '}
              <span className='forgetallspan'>NIGERIA</span>

            </h1>
          </div>

          <div className='Createdownimage'></div>

        </div>

        <div className='Create-right'>

          <IoIosArrowBack className='arrow' />

          <div className='Createinputholder'>

            <p className='Create-p-text'>Create New Password</p>

            <input type='text' className='Create-Input' placeholder='Password' />
            <input type='text' className='Create-Input' placeholder='Confirm Password' />

            <button className='Createbutton' onClick={handleNextClick}>
              Next
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;