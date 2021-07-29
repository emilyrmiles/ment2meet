import React, { useState } from 'react';
import './CardOne.css';
import CardOneItem from './CardOneItem';

import img1 from '../assets/Saly-1.png';
import img2 from '../assets/Saly-17.png';
import img3 from '../assets/Saly-16.png';
import img4 from '../assets/test-lizzie.jpg';
import img5 from '../assets/Saly-11.png';
import img6 from '../assets/Saly-7.png';

function CardOne() {

    // const [name, setName] = useState('Your Name');
    // const [job, setJob] = useState('(pronouns)');
    // const [about, setAbout] = useState('About');
  return (
    
    <div class="card-one">
        <h2 > Meet the Founders!</h2>
        <h3>As undergraduate students, we drew from our own experiences and frustrations in search for a mentor. Our frustrations led to ment2meet being created. We believe in equal opportunity, and that everyone deserves a chance at their dream job! We are so excited to connect mentees and mentors all around the world.</h3>
        {/* <div class="card-image"> 
            <img src= {img} alt= ' ' class='profile-pic'/>
        </div>

        <div className= 'card-content'>
            <h3> {name} </h3>
            <h4 style={{ color: 'grey' }}> {job} </h4>
            <p> {about} </p>
        </div> */}
        <div className= 'card-one-wrapper'> 

            <div className = 'card-one-container'>
                <CardOneItem
                    src = {img1}
                    name = 'Sally'
                    pronouns = '(she series)'
                    about = 'hi!'> 
                </CardOneItem>
            </div>

            <div className = 'card-one-container'>
                <CardOneItem
                    src = {img2}
                    name = 'Habiba'
                    pronouns = '(she/her/hers)'
                    about = 'hello everyone'> 
                </CardOneItem>
            </div>

            <div className = 'card-one-container'>
                <CardOneItem
                    src = {img3}
                    name = 'Laura'
                    pronouns = '(she/her/hers)'
                    about = 'hola!'> 
                </CardOneItem>
            </div>
            <div className = 'card-one-container'>
                <CardOneItem
                    src = {img4}
                    name = 'Emily'
                    pronouns = '(she/her)'
                    about = 'hello'> 
                </CardOneItem>
            </div>

            <div className = 'card-one-container'>
                <CardOneItem
                    src = {img5}
                    name = 'Kaly'
                    pronouns = '(she/her)'
                    about = 'hi all!'> 
                </CardOneItem>
            </div>

            <div className = 'card-one-container'>
                <CardOneItem
                    src = {img6}
                    name = 'Yan'
                    pronouns = '(she series)'
                    about = 'nice to meet you!'> 
                </CardOneItem>
            </div>

            
        
        </div>
            
    </div>
  );
}

export default CardOne;
