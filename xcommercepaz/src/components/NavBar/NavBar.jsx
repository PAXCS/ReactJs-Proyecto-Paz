import React,  { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import CartWidget from '../CartWidget';
import './NavBar.css';


function getCategories () {
    const db = getFirestore();

    const itemsCollection = collection(db,'items');

    return getDocs(itemsCollection);
}

function NavBar(props) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then(snapshot => {
                const categories = snapshot.docs.map(doc => doc.data().category);
                setCategories(categories);
    
            })
    }, []);

    return (
        <div className='navBar-container'>
          <Link  to={'/'}><h1 className='titulo'>XcommerC</h1></Link>  
                <ul className='links'>
                    <li>
                       <NavLink to='/category/smarttv' className={nav => nav.isActive ? 'nav-active' : ''}>Smart TV</NavLink>
                       <NavLink to='/category/tablet' className={nav => nav.isActive ? 'nav-active' : ''}>Tablets</NavLink>
                       <NavLink to='/category/smartphone' className={nav => nav.isActive ? 'nav-active' : ''}>SmartPhone</NavLink>
                       <NavLink to='/category/pc' className={nav => nav.isActive ? 'nav-active' : ''}>PC</NavLink>
                    </li>
                    <CartWidget/>
                </ul>
        </div>
    );
}

export default NavBar;