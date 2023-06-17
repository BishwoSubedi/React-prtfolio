import React from 'react'
import CV from '../../assets/cv.pdf'
const PDA = () => {
  return (
    <div>
      <div className='cta'>
        <a href={CV} download className='btn'>Download Cv</a>
        <a href="/" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  )
}

export default PDA
