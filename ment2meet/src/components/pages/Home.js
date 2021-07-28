import React from 'react';  
import '../../App.css';
import HeroSection from'../HeroSection';
import Card from '../Card';
import CardTwo from '../CardTwo';


function Home() {
    return (
        <>
            <HeroSection/>
            <Card/>
            <CardTwo/>
            {/* <MentorCard /> */}
        </>
    );
}
export default Home;