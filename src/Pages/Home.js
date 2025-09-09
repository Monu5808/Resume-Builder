import React from 'react'
import './Home.css'

import mainImage from '../Assets/home-img.png'

const Home = () => {
  return (
    <div className='home-main'>
      <div className='home-left'>
          <h1>Your resume in three <span style={{color:"#38b2a9"}}>easy</span>  steps</h1>
          <p>Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a professional-looking resume in a few easy steps. This resume builder offer different template options, so you can select the template that best fits your needs and style.</p>

          <ol>
            <li>Select a template from our collection.</li>
            <li>Build you resume using our easy to use resume builder.</li>
            <li>Download your resume.</li>
          </ol>
      </div>

      <div className='home-right'>
        <img src={mainImage} /> 
        <button>Select Template</button>
      </div>

    </div>
  )
}

export default Home;
