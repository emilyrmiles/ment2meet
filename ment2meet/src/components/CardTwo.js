import React from 'react';
import './CardTwo.css'


function CardTwo() {
  return (
    
    <div class ="cardTwo"> 
        <div className ="card2-text"> 
          <h4> Excited yet? </h4>
          <h4> Find your mentor today! </h4>
        </div>
        <div className= 'card2-text2'>
          <h5>Signing up doesn't take long, but meaningful connections last for life. </h5>
        </div>
        {/* <h4> Excited yet? </h4>
        <h4> Find your mentor today! </h4>
        <h5>Signing up doesn't take long, but meaningful connections last for life. </h5> */}
        <button className= 'card2-btn' onClick={() => this.nextPath('/Form.js') }>
          Find a Mentor Now 
        </button>
    </div>
   
  );
}

export default CardTwo;