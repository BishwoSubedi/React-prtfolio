import React from 'react'
import { useState } from 'react'
import './nav.css' 
import {AiOutlineHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {FiBookOpen} from 'react-icons/fi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {RiContactsLine} from 'react-icons/ri'

const Nav = () => {
  const[active,setActive]=useState('#')
  return(
  <nav>
    <a href="#head"  onClick={()=>setActive('#')} className={active==='#'?'active':' '}><AiOutlineHome /></a>
    <a href="#about" onClick={()=>setActive('#about')} className={active==='#about'?'active':' '}><FaUser /></a>
    <a href="#experience" onClick={()=>setActive('#experience')} className={active==='#experience'?'active':' '}><FiBookOpen /></a>
    <a href="#service" onClick={()=>setActive('#service')} className={active==='#service'?'active':' '}><MdMiscellaneousServices/></a>
    <a href="#contact" onClick={()=>setActive('#contact')} className={active==='#contact'?'active':' '}><RiContactsLine/></a>
  </nav>
  )
  }

export default Nav
