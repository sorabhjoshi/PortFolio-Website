import React from 'react'
import Navbar from '../components/navbar'
import './about.css'
import { motion } from 'framer-motion'
import Animcursor from '../components/animcursor'
const About = () => {
  return (<>
    <Navbar/>
    <Animcursor/>
    <motion.div className='contain' 
    
    initial={{width:0}}
    animate={{width:"100%", transition:{duration:0.3}}}
    exit={{x: window.innerWidth}}>
    <div className='d1'>
      <p id='P1'><strong>Hi, I'm Sourabh, a Web-Developer and Graphics Designer in Jaipur. </strong></p>
    <br />
      <p className='P2'>
        Hey there, Sourabh here, a Web-Developer and Graphics Designer with the passion to create seamless and delighful user experienxe.I especially enjoy working on designs and ideas which redefine the order in complexity.
      </p> <br />
      <p className='P3'>
        When i am not working you can find me Sketching , playing any sport or cafe hopping. Thanks for stopping by my portfolio!
      </p>
    </div>
    <div className='d2'>
    <p id='p4'><strong>What I like</strong></p>
    <br />
    <p>Sketching</p>
    <br />
    <p>Gym</p>
    <br />
    <p>listning to new music</p>
    <br />
    <p id='p5'><strong>What I'm learning</strong></p>
    <br />
    <p>Fluting</p>
    <br />
    <p>Java</p>
    <br />
    <p>Coal painting</p>
    </div>
    </motion.div>
    </>
  )
}

export default About