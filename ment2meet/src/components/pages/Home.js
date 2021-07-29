import React from 'react';  
import '../../App.css';
import HeroSection from'../HeroSection';
import CardOne from '../CardOne';
import CardTwo from '../CardTwo';


function Home() {
    return (
        <>
            <HeroSection/>
            <CardOne/>
            <CardTwo/>
            {/* <MentorCard /> */}
        </>
    );
}
export default Home;
