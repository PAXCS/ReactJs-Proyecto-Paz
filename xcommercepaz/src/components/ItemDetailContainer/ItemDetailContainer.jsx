import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem() {
    const myPromise = new Promise((resolve, reject) => {
        const item = {id: 1, title: 'Celular', price: '$ 75.000', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_966955-MLA48579050616_122021-F.webp', detail:'Samsung presenta su equipo Galaxy A52s potenciado con tecnología 5G, pantalla AMOLED de 6.5 pulgadas y un modulo de cuatro cámaras, siendo la principal de 64MP para capturar bellos momentos.'};
        
        setTimeout(() => {
            resolve(item);
        }, 2000);
        
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        getItem()
        .then(res => {
            setItem(res);
        })
        .catch(err => {
            console.log(err);
            alert('Se ha producido un error');
        });
    }, []);

    return (
        <div className='item-detail-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer