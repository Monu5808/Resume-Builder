import React from 'react';
import './Template1.css';

import profile from "../../Assets/profile-pic.png";


const Template1 = () => {
  return (
     <div className='main'>
      <div className='inner'>

          <div className='form-section'>
             <form>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Summary' />
                <input type="text" placeholder='Work Profile' />
                <input type="text" placeholder='Address' />
                <input type="tel" placeholder='Phone Number' />
                <input type="email" placeholder='Email Id' />
             </form>
          </div>
          <div className='layout-section'>
            <div className='layout-section-row1'>
              <div className='content-section'>

              </div>

              <div className='image-section'>

                <img src={profile} />

              </div>
            </div>  
          </div>

      </div>
    </div>
  )
}

export default Template1
