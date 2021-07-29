import React, { useState } from 'react';
import './MentorCard.css';
import MentorCardItem from './MentorCardItem'


import img4 from '../assets/test-lizzie.jpg';


function MentorCard() {

    // const [name, setName] = useState('Your Name');
    // const [job, setJob] = useState('(pronouns)');
    // const [about, setAbout] = useState('About');
  return (

    <div class="card">
        <h2 > Mentors Matched For You!</h2>
        <h3>Based on your profile, here are the top 3 mentors that matches your mentor preferences. To kickstart you mentorship, we recommend scheduling a mentoring session with one of them.</h3>
        <div className= 'card-wrapper'> 

            <div className = 'card-container'>
                <MentorCardItem
                    src = {img4}
                    name = 'Jane L.'
                    pronouns = 'she/her'
                    about = 'Product designer at Airbnb'> 

                </MentorCardItem>
                <button class='send-message'> Send a message </button>
                <button class = 'schedule-session'> Schedule a session </button>
            </div>

            <div className = 'card-container'>
                <MentorCardItem
                    src = {img4}
                    name = 'Diane P.'
                    pronouns = 'she/they'
                    about = 'UX designer at Microsoft'> 

                </MentorCardItem>
                <button class='send-message'> Send a message </button>
                <button class = 'schedule-session'> Schedule a session </button>
            </div>





        </div>

    </div>
  );
}

export default MentorCard;