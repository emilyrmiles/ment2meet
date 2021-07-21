import React from 'react';


function CardItem(props) {
  return (
    <>
        <div className ="card-image"> 
            <img 
             className='profile-pic'
             src={props.src}/>
        </div>

        <div className= 'card-content'>
            <h3 className='props-name'> {props.name} </h3>
            <h4 className= 'props-pronouns' style={{ color: 'grey' }}> {props.pronouns} </h4>
            <p className = 'props-about'> {props.about} </p>
        </div>
    </>
  );
}

export default CardItem;