import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div>
            <h1>XcommerC</h1>
                <ul className='links'>
                    <a href="#">Tecnología</a>
                    <a href="#">Supermercado</a>
                    <a href="#">Exclusivos</a> 
                    <a href="#" className='carrito'>Carrito</a>
                </ul>
        </div>
    );
}

export default NavBar;