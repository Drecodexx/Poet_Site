import React from 'react'
import Button from './Button'

function section1() {
  return (
    <div className=" justify-content-center Section1 borders-r">
      <div>
      </div>

      
      <div className="section1Main">
      <div className=" col-lg-6 col-sm-6 col-md-12 borders-r">
        
      <text class="t1"> Get the best of poetry Exclusively at poetsite.com<br/></text>
              <text className="textBoxSection">
               <span class="t2">Hi there<br/></span>
               <span class="t3">ARTHUR NJUME </span>
               <span class="t4">here<br/> mmm... I do Poetry and <br/></span>
               <span class="t5">I can  be your ...<br/></span>
               <span class="t6">poetryPlug</span>
               </text>
               <Button/>
            </div>
            <div className=" Image-div col-lg-6 col-sm-6 col-md-12 borders-r">
        <img className="img-fluid " alt="vector image1"  src={'/images/img1.png'} style={{ position: "" }}/> 

      </div>
      
      </div>
    </div>
  )
}

export default section1