import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
const Socail = () => {
  return (
    <div className='header__social'>
      <a href="https://linkedin.com"  rel="noreferrer" target='_blank'><AiFillLinkedin/></a>
      <a href="https://github.com"   rel="noreferrer" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default Socail
