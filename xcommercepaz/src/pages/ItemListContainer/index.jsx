import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import './ItemListContainer.css';

function getProducts(category) {
  const db = getFirestore();

  const itemsCollection = collection(db, 'items');

  const q = query(
    itemsCollection,
  );

  return getDocs(q);
  
}


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

    useEffect(() => {

    getProducts(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        }));
      })
      .catch(err => {
        console.log(err);
        alert('Error undefined!');
      });

    }, [categoryId]);
    
    return (
        <>
          <ItemList items={products}/>
          
        </>

    ); 
};

export default ItemListContainer;