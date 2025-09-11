import React from 'react'

const SelectTemplate = () => {
  return (
    <div className='home-main'>
      <div className='inner-home'>

          <div className='home-left'>

              <h1 style={{textAlign:"center", fontSize:"60px", lineHeight:"65px", fontWeight:"600"}} >Select a <span style={{color:"#38b2a9"}}> Template </span> from the list </h1>
              
          </div>

          <div className='home-right'>
            <button>Select Template</button>
          </div>
          
        </div>

    </div>
  )
}

export default SelectTemplate
