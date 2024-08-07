import React from 'react'
import './../Section/Section'
import gymi from './../../assets/image 1.png'
const Section = () => {
  return (
    <>
    
    <div className='sec2'>
        <div className='phh'>
        <h2> الموقع الأول للياقة البدنية للرجال في العالم العربي!</h2>
       <h3>ابدأ رحلتك نحو الجسم المثالي اليوم</h3>
       <p>انضم إلى آلاف الرجال الذين حققوا أهدافهم الصحية مع قوة ولياقة</p>
       
        </div>
     
        <img src={gymi} />
    
     </div>
    
    </>
  )
}

export default Section
