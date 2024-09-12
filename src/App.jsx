import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Tech from './components/tech/Tech'
import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
    
  <Nav></Nav>
  {/* <Hero></Hero> */}
  <Contact></Contact>
  {/* <Tech></Tech> */}
  {/* // <Testimonial></Testimonial> */}
  <Footer></Footer>
    </>
  )
}

export default App
