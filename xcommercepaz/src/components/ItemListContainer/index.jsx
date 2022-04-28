import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function getProducts() {
  const myPromise = new Promise((resolve, reject) => {
    const productList = [
      {id: 1, title: 'Celular', price: '$ 75.000', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_966955-MLA48579050616_122021-F.webp'},
      {id: 2, title: 'Notebook', price: '$ 150.000', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_908593-MLA49420869607_032022-O.webp'},
      {id: 3, title: 'Tablet', price: '$ 65.000', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_909806-MLA47146793018_082021-F.webp'},
      {id: 4, title: 'TV', price: '$ 120.000', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_974663-MLA47846000904_102021-F.webp'}
  
  ];
  setTimeout (() => {
    resolve(productList);
  }, 2000);
  });
  return myPromise;
  
}


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts()
      .then(res => {
        setProducts(res);
      })
    }, []);


    function zonza() {
        console.log("Agregado al carrito");
    }
    
    return (
        <>
          <div className='bienvenida'>
            {greeting}
          </div>
          <ItemList items={products}/>
          <ItemCount initial={0} stock={5} onAdd={zonza}/>
        </>

    ); 
};

export default ItemListContainer;