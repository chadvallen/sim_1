import React from 'react';

export default function Product(props) {

    return (
        <div>
            <div>{props.name}</div>
            <div>{props.price}</div>
            <img src={props.img} />
            
        </div>
    )
}