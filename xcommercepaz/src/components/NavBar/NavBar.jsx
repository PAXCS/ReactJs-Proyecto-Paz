import React,  { useEffect, useState} from 'react';
import { Link, NavLink} from 'react-router-dom';
import { getFirestore, collection, getDocs} from 'firebase/firestore';
import CartWidget from '../CartWidget';
import './NavBar.css';

//Composición del NavBar

function NavBar(props) {


    return (
        <div className='navBar-container'>
          <Link  to={'/'}><h1 className='titulo col-2'>XcommerC</h1></Link>  
                <ul className='links'>
                    <li>
                       <NavLink to="/category/tecnologia" className={nav => nav.isActive ? 'nav-active' : ''}>Tecnologia</NavLink>
                       <NavLink to='category/' className={nav => nav.isActive ? 'nav-active' : ''}>Herramientas</NavLink>
                       <NavLink to='category/' className={nav => nav.isActive ? 'nav-active' : ''}>Destacados</NavLink>
                    </li>
                    <CartWidget/>
                </ul>
        </div>
    );
}

export default NavBar;