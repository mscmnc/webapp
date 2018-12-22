import React from 'react';

const button = (props) => (
    <button type={props.type} onClick={props.onClick} disabled={props.disabled} >{props.title}</button>
);

export default button;