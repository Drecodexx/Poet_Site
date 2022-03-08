import React from 'react'
import Button from './Button'


function SectionHome1() {
    return (
        <div className="SectionHome1 container-fluid col  pageSection">
            <div ClassName="row Sec1">
               <text class="t1"> Get the best poetry content Ever for you only at poetsite.com<br/></text>
               <text class="t2">Hi there<br/></text>
               <text class="t3">ARTHUR NJUME </text>
               <text class="t4">here<br/> mmm... I do Poetry and <br/></text>
               <text class="t5">I can  be your ...<br/></text>
               <text class="t6">poetryPlug</text>
               <Button/>
            </div>
            <div ClassName="row">
            <img 
          alt="vector image4" 
           src={'/images/Asset 4.png'} 
          //style={{ size: "50%",  position: "absolute"}} 
        />  
            <img 
          alt="vector image1" 
         src={'/images/img1.png'} 
         // style={{  position: "absolute", margintop: "30px"}} 
        /> 
        
            </div>  
        </div>
    )
}

export default SectionHome1;

