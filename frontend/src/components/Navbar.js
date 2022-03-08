import React  from 'react'
//import { useEffect, useState } from 'react'
import './components.css'

function Navbar(){

    return(

        <div class=''>
            <nav class="MyNavbar navbar navbar-expand navbar-collapse  container-fluid">
                <div class="logo container-fluid">
                    <div>
                    <a class="navbar-brand" href="#">
                        <text class="logoText">
                            Arthur
                        </text>
                        <text class="Njume">
                            Njume.
                        </text>
                    </a>
                    </div>

                    <div class="NavLinks ">
                            <ul class="NavLinks nav  mr-auto  flex-row-reverse">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">about</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ">Contact</a>
                                </li>
                            </ul>                   
                    </div>
                 </div>
            </nav>
        </div>
    );
}
export default Navbar;