import React from 'react'
import'./../Section3/Section3.css'
import fruits from './../../assets/Rectangle 40.png'
const Section3 = () => {
  return (
    <>
    <div className='cont4'>
           <h2>نصائحنا</h2>
           <h2>التغذية الصحية</h2>
           <p>
           التغذية الجيدة توفر الطاقة اللازمة لأداء التمارين وتساعد في التعافي بعد الجهد البدني.
           </p>
           <p>تأكد من تناول البروتينات، الكربوهيدرات الصحية، والدهون المفيدة. تجنب الأطعمة المصنعة والمشروبات السكرية.</p>
           <p>التغذية الصحية هي جزء أساسي من أي برنامج للياقة البدنية.</p>
           <p>التغذية الصحية هي جزء أساسي من أي برنامج للياقة البدنية. تعرّف على النصائح والوصفات الغذائية التي تساعدك في الحفاظ على نظام غذائي صحي ومتوازن يساهم في تحقيق أهدافك الرياضية والصحية</p>

           <div className='ss3'>
          <button  style={{background:"#283A81",color:"white"}}>قراءة المزيد</button>
          <button className='bb' style={{background:"#AFBDF4",color:"white"}}> عرض الكل </button>
        </div>
        <img src={fruits}/>

    </div>
    
    </>
  )
}

export default Section3
