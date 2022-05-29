import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

//Página con los detalles del producto

//Llamado a firebase
function getItem(id) {
   const db = getFirestore();

   const itemRef = doc(db, 'items', id);

   return getDoc(itemRef);

}

//map para traer los datos solicitados
function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        
        getItem(id)
        .then(snapshot => {
            setItem({...snapshot.data(), id: snapshot.id });
        })
        .catch(err => {
            console.log(err);
            alert('Se ha producido un error');
        });
    }, [id]);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer