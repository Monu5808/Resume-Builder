import React from 'react';
import './Template1.css';

import profile from "../../Assets/profile-pic.png";


const Template1 = () => {
  return (
    
    <div className='container-fluid'>

      <div className='row'>

          <div className='col-md-6'>
             <form>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Summary' />
                <input type="text" placeholder='Work Profile' />
                <input type="text" placeholder='Address' />
                <input type="tel" placeholder='Phone Number' />
                <input type="email" placeholder='Email Id' />
             </form>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-6'>
                  <h1>Your Name</h1>
                  <h3>work profile</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div className='col-md-6 image-sec'>

                <img style={{width:'150px'}} src={profile} />

              </div>
            </div> 

            <hr />

          </div>

      </div>
    </div>
  )
}

export default Template1
