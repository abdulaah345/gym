import React from 'react'
import gymi from './../../assets/image 1.png'
import './../Section/Section.css'
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

        <div className='ss'>
          <button  style={{background:"#283A81",color:"white"}}>أنضم الان</button>
          <button className='bb' style={{background:"#AFBDF4",color:"white"}}>فيديو تعريفي <i className="fa fa-play-circle"></i></button>
        </div>
        
    
     </div>
    
    </>
  )
}

export default Section
