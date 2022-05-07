import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='navBar-container'>
          <Link  to={'/'}><h1 className='titulo'>XcommerC</h1></Link>  
                <ul className='links'>
                    <NavLink className='categorias' to='/category/tecnologia'><a className='categorias' href="#">Tecnología</a></NavLink>
                    <NavLink  to='/category/supermercado'><a  href="#">Supermercado</a></NavLink>
                    <NavLink  to='/category/exclusivos'><a  href="#">Exclusivos</a></NavLink> 
                    <CartWidget/>
                </ul>
        </div>
    );
}

export default NavBar;