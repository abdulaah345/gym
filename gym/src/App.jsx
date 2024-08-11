import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Section1 from './Component/Section1/Section1'
import Section from './Component/Section/Section'
import Section3 from './Component/Section3/Section3'
import Programs from './Component/Programs'
import Trainers from './Component/Trainers'
import Rating from './Component/Rating'
import Footer from './Component/Footer'
function App() {


  return (
    <>
    <Navbar/>
    <Section/>
    <Section1/>
    <Section3/>
    <Programs/>
    <Trainers/>
    <Rating/>
    <Footer/>
    
    
    
    </>
  )
}

export default App
