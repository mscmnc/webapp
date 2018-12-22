import React from 'react';

const input = (props) => (    
        <input type={props.type} placeholder={props.placeholder} id={props.id} onChange={props.changed} value={props.value}></input>
)

export default input;