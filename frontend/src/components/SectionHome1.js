import React from 'react'
import Button from './Button'


function SectionHome1() {
    return (
        <div className="SectionHome1 ">
            <c><text class="t1"> Get the best poetry content Ever for you only at poetsite.com<br/></text></c>
            <div className="SectionHome1 row justify-content-center container ">
             <div style={{ width: "50%", border: "2px solid blue"}} ClassName="col-lg-6 col-sm-6 col-md-12">
             <img className="img-fluid" alt="vector image1"  src={'/images/img1.png'} style={{ position: "absolute" }}/> 
             <img className=" img-fluid" alt="vector image4" src={'/images/Asset 4.png'} style={{ position: "" }}/>
        
            </div> 
            <div style={{ float: "left", width: "50%", border: "2px solid red", position: ""}} ClassName="textBox col-lg-6 col-sm-6 col-md-12">
               <text class="t2">Hi there<br/></text>
               <text class="t3">ARTHUR NJUME </text>
               <text class="t4">here<br/> mmm... I do Poetry and <br/></text>
               <text class="t5">I can  be your ...<br/></text>
               <text class="t6">poetryPlug</text>
               <Button/>
            </div>
            </div>
        </div>
    )
}

export default SectionHome1;
