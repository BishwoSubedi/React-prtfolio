import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/NavBar/Nav'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonial'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
