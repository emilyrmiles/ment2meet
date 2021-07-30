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
                    src = {"https://ca.slack-edge.com/T5M2Z16PR-U024TEA8NA2-f51dec613021-512"}
                    name = 'Sally'
                    pronouns = '(she series)'
                    about = 'hi!'> 
                </CardOneItem>
            </div>

            <div className = 'card-one-container'>
                <CardOneItem
                    src = {"https://ca.slack-edge.com/T5M2Z16PR-U024TEBGQF8-da5c758fcd5c-512"}
                    name = 'Habiba'
                    pronouns = '(she/her/hers)'
                    about = 'hello everyone'> 
                </CardOneItem>
            </div>

            <div className = 'card-one-container'>
                <CardOneItem
                    src = {"https://ca.slack-edge.com/T5M2Z16PR-U0256CW1H7E-d126d98e76b9-512"}
                    name = 'Laura'
                    pronouns = '(she/her/hers)'
                    about = 'hola!'> 
                </CardOneItem>
            </div>
            <div className = 'card-one-container'>
                <CardOneItem
                    src = {"https://ca.slack-edge.com/T5M2Z16PR-U02507UUA74-8d115ae5b02b-512"}
                    name = 'Emily'
                    pronouns = '(she/her)'
                    about = 'hello'> 
                </CardOneItem>
            </div>

            <div className = 'card-one-container'>
                <CardOneItem
                    src = {"https://ca.slack-edge.com/T5M2Z16PR-U01535LKV1U-1835f787c2a2-512"}
                    name = 'Kaly'
                    pronouns = '(she/her)'
                    about = 'hi all!'> 
                </CardOneItem>
            </div>

            <div className = 'card-one-container'>
                <CardOneItem
                    src = {"https://ca.slack-edge.com/T5M2Z16PR-U0250EFVASF-a847b8953773-512"}
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
