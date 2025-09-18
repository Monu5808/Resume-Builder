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

             <diV className="row ">

              <div className='col-md-3 layout-row2-left'>
                <h3>contact</h3>

                <b>Phone</b>
                <p>Phone Number</p>

                <b>Email</b>
                <p>Email Address</p>

                <b>Address</b>
                <p>Adress Line</p>
                  

                <h3>Skills</h3>
                <p>Skill 1</p>
                <p>Skill 2</p>
                <p>Skill 3</p>
                <p>Skill 4</p>
                <p>Skill 5</p>

              </div>


              <div className='col-md-9'>
                <h3>Education</h3>
                <b>Education Title</b>
                <ul>
                  <li>Education Description Show Here</li>
                  <li>With Bullet Points</li>
                </ul>

                <h3>Projects</h3>
                <b>Project Title</b>
                <ul>
                  <li>Project Description Show Here</li>
                  <li>With Bullet Points</li>
                </ul>

                <h3>Work</h3>
                <b>Work Title</b>
                <ul>
                  <li>Work Description Show Here</li>
                  <li>With Bullet Points</li>
                </ul>

                <h3>Award & Acheivements</h3>
                <ul>
                  <li>Your Award Show Here</li>
                </ul>
                
                  
              </div>

             </diV>

          </div>

      </div>
    </div>
  )
}

export default Template1
