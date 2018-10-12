import React from 'react';

export default function Product(props) {

    return (
        <div>
            <img src={props.img} />
            <div>{props.name}</div>
            <div>{props.price}</div>
            
           
            
        </div>
    )
}