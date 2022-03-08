import React from 'react'
import Button from './Button'

function SectionHome2() {
  return (
    <div className="SectionHome1 col container-fluid">
            <div className="col">
                <img 
                    alt="vector image2" 
                    src={'/images/img2.png'} 
                    /*style={{ height: "70px", paddingRight: "10px" }} */
        /> 
        
            </div>
            <div class="Sec1 col">
               <text class="t3"> I have been   <br/></text>
               <text class="t3">doing freelance<br/></text>
               <text class="t6">writing  </text>
               <text class="t4">for  <br/></text>
               <text class="t3b">14</text>
               <text class="t6">years</text>
               <Button/>
            </div>
              
        </div>
  )
}

export default SectionHome2
