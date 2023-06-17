import React from 'react'
import './service.css'
import {BsCheck2} from 'react-icons/bs'
const Services = () => {
  return (
   <section id='service'>
    <h4>What I offer</h4>
    <h2>Services</h2>
    <div className="container services__container">
      <article className='service'>
     <div className='service_head'>
      <h3>UI/UX Design</h3>
     </div>
     <ul className='service__list'>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
     </ul>
      </article>
      {/* END OF UI/UX */}
      <article className='service'>
     <div className='service_head'>
      <h3>Web Development</h3>
     </div>
     <ul className='service__list'>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
     </ul>
      </article>
      {/* END OF WEB DEV */}
      <article className='service'>
     <div className='service_head'>
      <h3>Content Creation</h3>
     </div>
     <ul className='service__list'>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
      <li>
        <BsCheck2 className='service__list-icons'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus.</p>
      </li>
     </ul>
      </article>
    </div>
   </section>
  )
}

export default Services
