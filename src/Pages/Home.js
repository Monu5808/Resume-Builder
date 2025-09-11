import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


import mainImage from '../Assets/home-img.png'

const Home = () => {
  return (
    <div className='home-main'>
      <div className='inner-home'>

          <div className='home-left'>
              <h1 style={{textAlign:"center", fontSize:"60px", lineHeight:"65px", fontWeight:"600"}} >Your resume in three <span style={{color:"#38b2a9"}}>easy</span>  steps</h1>
              <p style={{textAlign:"center", color:"#575757ff"}}>Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a professional-looking resume in a few easy steps. This resume builder offer different template options, so you can select the template that best fits your needs and style.</p>

              <ol>
                <li>Select a template from our collection.</li>
                <li>Build you resume using our easy to use resume builder.</li>
                <li>Download your resume.</li>
              </ol>
          </div>

          <div className='home-right'>
            <img src={mainImage} /> 

            <Link to="/select-template">
               <button>Select Template</button>
            </Link>

           
          </div>
          
        </div>

    </div>
  )
}

export default Home;
