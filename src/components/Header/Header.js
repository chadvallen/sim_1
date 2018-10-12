import React from 'react'
import './Header.css';
import Icon from '../../images/shelfie_icon.png';

export default function Header() {
    return (
        <div>
            <header>
                <img className="icon" src={Icon}></img>
                <h1>SHELFIE</h1>
            </header>
        </div>
    )
}