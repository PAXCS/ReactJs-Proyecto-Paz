import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productList = [
      {id: 1, category: 'tecnologia', title: 'Celular', price: 75000, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_966955-MLA48579050616_122021-F.webp'},
      {id: 2, category: 'tecnologia', title: 'Notebook', price: 150000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_908593-MLA49420869607_032022-O.webp'},
      {id: 3, category: 'tecnologia', title: 'Tablet', price: 65000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_909806-MLA47146793018_082021-F.webp'},
      {id: 4, category: 'tecnologia', title: 'TV', price: 120000, pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_974663-MLA47846000904_102021-F.webp'}
  
  ];

  const productsFiltered = category ? productList.filter(p => p.category === category) : productList;
  setTimeout (() => {
    resolve(productsFiltered);
  }, 2000);
  });
  return myPromise;
  
}


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

    useEffect(() => {
      getProducts(categoryId)
      .then(res => {
        setProducts(res);
      })
    }, [categoryId]);


    /* function zonza() {
        console.log("Agregado al carrito");
    } */
    
    return (
        <>
          <ItemList items={products}/>
          
        </>

    ); 
};

export default ItemListContainer;