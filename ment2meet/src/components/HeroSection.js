import React from 'react'
import '../App.css'
import './HeroSection.css'
import {Button} from './Button.js';
import styled from 'styled-components'
function HeroSection() {
    return (
        <div className= 'hero-image'>
            {/* <image src='../assets/emily_fin.png'/> */}
                <div className= 'hero-text'>
                    <h1 > Get ahead through </h1>
                    <h1 > meaningful connections</h1>
                    <div className= 'hero-below'>
                        <p >As undergraduate students, meeting a mentor can be difficult. ment2meet allows students to access mentorship opportunities and create a meaningful connection with a mentor </p>
                        {/* <p>be difficult. ment2meet allows students to access </p>
                        <p>mentorship opportunities and create a meaningful </p>
                        <p>connection with a mentor</p> */}
                        <button class="btn">Find a Mentor Now!</button>
                    </div>
                </div>
        </div>
        
    )
}
export default HeroSection