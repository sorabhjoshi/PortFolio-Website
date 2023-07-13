import React from 'react'
import Navbar from "../components/navbar"
import Animcursor from "../components/animcursor"
import "./contact.css"
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <>
    <Navbar/>
    <Animcursor/>
    <motion.div className='container'
      initial={{width:0}}
      animate={{width:"100%",transition:{duration:0.3}}}
      exit={{x: window.innerWidth}}
      >
    <p className='contact'>Contact Me</p>
      <div className='contactinfo'>
      <div className='ughh'>
      <p className='head'>Get in touch</p>
        <p className='em'>Email: sorabhjoshi11@gmail.com</p>
        <p className='phone'>Phone: +91 9982541337</p>
        <p className='location'>Location: Jaipur, Rajasthan, India</p>
        <a href="https://www.instagram.com/sorabhjoshi_11/"><i id="icons"  className="fa-brands fa-instagram"></i></a>
        <a href="https://github.com/sorabhjoshi"><i id="icons" className="fa-brands fa-github"></i></a>
        <a href="https://linkedin.com/in/sorabh-joshi/"><i id="icons" class="fa-brands fa-linkedin"></i></a>
      </div>
      </div>
      <div className='contactform'>
          <form
            action="https://formspree.io/f/xzblbeez"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              className='text'
              placeholder=" username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              className='email'
              type="email"
              name="Email"
              placeholder=" Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              className='textarea'
              required
              autoComplete="off"
              placeholder=" Enter you message"></textarea>

            <input className='submit'  type="submit" value="send" />
          </form>
        </div>
    </motion.div>
    </>
  )
}

export default Contact;