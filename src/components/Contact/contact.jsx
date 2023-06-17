import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s965qyt', 'template_gqkqk0n', form.current, '7plEVOee4JauaTg_4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
  return (
   <section id='contact'>
    <h4>Get In Touch</h4>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      {/* left */}
      <div className="contact__options">
      <article className="contact__option">
        <MdEmail className='contact__icon'/>
        <h2>Email</h2>
        <h6>bishwosubedu@gmail.com</h6>
        <a href="mailto:bishwosubedu@gmail.com">Send a message</a>
      </article>
      <article className="contact__option">
        <FaFacebookMessenger className='contact__icon'/>
        <h2>Messenger</h2>
        <a href="https://www.facebook.com/raj.subedi.393950">Send a message</a>
      </article>
      <article className="contact__option">
        <BsInstagram className='contact__icon'/>
        <h4>Instagram</h4>
        <a href="https://www.instagram.com/bishwo_subedi_5647/">Send a message</a>
      </article>
      </div>
      {/* Right */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name='message' rows='8' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
