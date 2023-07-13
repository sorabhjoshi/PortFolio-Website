import React from 'react'
import Navbar from "../components/navbar"
import Animcursor from "../components/animcursor"
import "./work.css"
import Carousel from '../components/Carousel'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <>
    <Navbar/>
    <Animcursor/>
    <motion.div className="app"
    
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth,transition:{duration:0.3}}}>
    <h1>Graphic-Desgins</h1>
    <Carousel/>
    </motion.div>
    </>
  )
}

export default Work;