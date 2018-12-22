import React from 'react';

const Img = (props) => (
    <li className="webapp-bottom-imageGrid-img" >
        <img src={props.url} alt="Unsplash photos"></img>
        <a href={props.user} target="_blank" rel="noopener noreferrer">Photo by {props.name}</a><br></br>
        <a href={props.link} target="_blank" rel="noopener noreferrer">See it on Unsplash</a>
    </li>
)

export default Img;