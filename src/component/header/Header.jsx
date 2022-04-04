import React from 'react';
import logo from '../images/cartImage.jpg'
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="This is logo" className='logo'/>
            <h1>This is Header</h1>
        </div>
    );
};

export default Header;