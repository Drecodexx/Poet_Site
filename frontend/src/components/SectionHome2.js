import React from 'react'
import Button from './Button'

function SectionHome2() {
  return (
    <div className="section1Main">
            <div className="borders-r col-lg-6 col-sm-6 col-md-12">
                <img 
                    className="img-fluid"
                    alt="vector image1" 
                    src={'/images/img2.png'} 
                    /*style={{ height: "70px", paddingRight: "10px" }} */
        /> 
        
            </div>
            <div class="borders-r col-lg-6 col-sm-6 col-md-12">
            <text className="textBoxSection">
               <span class="t3"> I have been   <br/></span>
               <span class="t3">doing freelance<br/></span>
               <span class="t6">writing  </span>
               <span class="t4">for  <br/></span>
               <span class="t3b">14</span>
               <span class="t6">years</span>
               </text>
               <Button/>
            </div>
              
        </div>
  )
}

export default SectionHome2
