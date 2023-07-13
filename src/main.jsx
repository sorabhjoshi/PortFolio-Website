import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import { AnimatePresence } from 'framer-motion'
import About from '../public/about.jsx'
import Work from '../public/work.jsx'
import Contact from "../public/contact.jsx"
{ <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Raleway:wght@600&display=swap" ></link> }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AnimatePresence >
    <Routes> 
    <Route exact path="/about" element={ <About />} />
    <Route exact path="/work" element={ <Work />} />
    <Route exact path="/contact" element={ <Contact />} />
    <Route exact path='/' element={ <App/> }></Route>
    </Routes>
    </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
)
