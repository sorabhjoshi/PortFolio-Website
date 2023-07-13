import './App.css'
import Self from "../assets/Self1.jpg"
import "../components/navbar"
import Navbar from '../components/navbar'
import Animcursor from '../components/animcursor'
import { motion } from 'framer-motion'

function App() {
  return(
<>
<Navbar/>
<Animcursor/>
<motion.div 
className='container'
initial={{width:0}}
animate={{width:"100%",transition:{duration:0.3}}}
exit={{x: window.innerWidth}}
>
<div className='name'>
  <h4>I'm</h4>
<h1>Sourabh Joshi</h1>
<h3>Creative Web Developer and Graphics Designer</h3>
</div>
<img src={Self} alt="" srcset="" />
</motion.div>

</>
  )
}

export default App;
