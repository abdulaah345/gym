import React from 'react'
import logo1 from './../../assets/Group 48.png'
import './../Section1/section.css'
const Section1 = () => {
  return (
    <>
    
    <div className='con1'>
        <p>ماذا نقدم</p>
        <div className='container'>
            <img src={logo1}/>
        </div>
        <div className='con2'>
        <p>متابعة فورية</p>
            <p>نصائح غذائية</p>
            <p>برامج تدريبية</p>
            <p>تمارين مخصصة</p>
        </div>
        </div>
        </>
    
    
  )
}

export default Section1
