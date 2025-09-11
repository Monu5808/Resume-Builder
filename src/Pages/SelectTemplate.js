import React from 'react'
import './SelectTemplate.css'


import template1 from '../Assets/templates/template1.png'
import template2 from '../Assets/templates/template2.jpg'
import template3 from '../Assets/templates/template3.jpg'
import template4 from '../Assets/templates/template4.png'
import template5 from '../Assets/templates/template5.jpg'


const SelectTemplate = () => {
  return (
    <div className='main'>
      <div className='inner'>

          <div className='heading-section'>

              <h1 style={{textAlign:"center", fontSize:"60px", lineHeight:"65px", fontWeight:"600"}} >Select a <span style={{color:"#38b2a9"}}> Template </span> from the list </h1>
              
          </div>

          <div className='template-section'>
            <div className='template-section-row1'>

              <img src={template1} />
              <img src={template1}  />
              <img src={template1}  />

            </div>
            <div className='template-section-row1'></div>
          </div>
          
        </div>

    </div>
  )
}

export default SelectTemplate
