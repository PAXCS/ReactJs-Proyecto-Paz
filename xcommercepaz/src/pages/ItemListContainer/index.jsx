import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import './ItemListContainer.css';

//Página contenedora principal

//Llamado a Firebase
function getProducts(category) {
  const db = getFirestore();

  const itemsCollection = collection(db, 'items');

  const q = query(
    itemsCollection,
  );

  return getDocs(q);
  
}

// función con map sobre firebase para obtener los datos solicitados
const ItemListContainer = () => {

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
        <><div>
            <ItemList items={products}/>
        </div>
          
          <footer className='row col-12'>
            <div className='footer-data'> <strong>XcommercE ™️ </strong> <br className='street' /><i> Calle falsa 123 - Springfield <br className='legal' />Todos los derechos reservados </i></div>
          </footer>
        </>

    ); 
};

export default ItemListContainer;