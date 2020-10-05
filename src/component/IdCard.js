import React from 'react';
import './idcard.css';

const IdCard = (props) => {
    return (
        <div className="container-id-card">
            <div><img src={props.picture} alt=""/></div>
            <ul>     
                <li>First name: {props.firstName}</li>
                <li>Last name: {props.lastName}</li>
                <li>Gender: {props.gender}</li>
                <li>Height: {props.height}</li>
                <li>Birth: {props.birth.toString()}</li>
            </ul>  
        </div>
    )
}

export default IdCard;