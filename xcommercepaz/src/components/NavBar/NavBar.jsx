import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <h1>XcommerC</h1>
                <ul className='links'>
                    <a href="#">Tecnología</a>
                    <a href="#">Supermercado</a>
                    <a href="#">Exclusivos</a> 
                    <CartWidget/>
                </ul>
        </div>
    );
}

export default NavBar;