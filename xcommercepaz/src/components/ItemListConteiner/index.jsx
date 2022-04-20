import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='bienvenida'>
           {greeting}
        </div>
    );
};

export default ItemListContainer;