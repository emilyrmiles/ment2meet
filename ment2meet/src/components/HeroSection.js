import React from 'react'
import '../App.css'
import './HeroSection.css'
import {Button} from './Button.js';
import styled from 'styled-components'
import CardOne from './CardOne.js'
import CardTwo from './CardTwo';

function HeroSection() {
    return (
        <div className= 'hero-image'>
            
                <div className= 'hero-text'>
                    <h1 style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}> Get ahead through </h1>
                    <h1 > meaningful connections</h1>
                    <div className= 'hero-below'>
                        <p >As undergraduate students, meeting a mentor can be difficult. ment2meet allows students to access mentorship opportunities and create a meaningful connection with a mentor </p>
                        
                        <button class="btn">Find a Mentor Now</button>
                        <button class="btn">Become a Mentor</button>
                            <div className='right-image'>
                                {}
                                <div className='second-home-image'>
                                    {}
                                    <div className = 'third-home-image'>
                                        {}
                                        
                                    </div>
                                    {/* <CardTwo class = 'cardtwo'>
                                            
                                    </CardTwo> */}

                                </div>
                            </div>
                    </div>
                </div>
        </div>
        
    )
}
export default HeroSection
