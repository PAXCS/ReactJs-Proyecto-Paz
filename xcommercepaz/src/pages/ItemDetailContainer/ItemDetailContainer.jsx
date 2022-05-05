import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productList = [
            {id: 1, title: 'Celular', price: '$ 75.000', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_966955-MLA48579050616_122021-F.webp', detail:'Samsung presenta su equipo Galaxy A52s potenciado con tecnología 5G, pantalla AMOLED de 6.5 pulgadas y un modulo de cuatro cámaras, siendo la principal de 64MP para capturar bellos momentos.'},
            {id: 2, title: 'Notebook', price: '$ 150.000', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_908593-MLA49420869607_032022-O.webp', detail:'Manténgase conectado a aquello que más le importa con la batería de larga duración y un diseño elegante y portátil con bisel y microbordes. Diseñada para mantenerlo productivo y entretenido desde cualquier lugar, esta computadora portátil HP de 15" ofrece un rendimiento confiable y una pantalla ampliada que le permite reproducir, navegar y agilizar sus tareas desde que sale el sol hasta que se pone.'},
            {id: 3, title: 'Tablet', price: '$ 65.000', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_909806-MLA47146793018_082021-F.webp', detail:'Disfruta de películas, videos y juegos en pantalla panorámica con amplios ángulos de visión, menos reflejos y mayor brillo en la tablet Lenovo Tab K10. Con el potente procesador MediaTek Helio P22T y unos gráficos superiores, esta tablet de 10.3” está hecha para rendir. Cuenta con conectividad 4G LTE opcional y hasta 4 GB de RAM para una rápida respuesta del sistema.'},
            {id: 4, title: 'TV', price: '$ 120.000', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_2X_974663-MLA47846000904_102021-F.webp', detail:'Siente como tus películas favoritas y programas de televisión cobran vida. Disfruta una resolución Full HD intensa y con colores vivos con el doble de resolución que un televisor HD. Maneja la interfaz de tu Smart TV y controla todos tus dispositivos como consolas de videojuegos, dispositivos de audio, decodificadores de TV y demás que estén conectados al televisor desde un único control remoto.'}
        
        ];

        const item = productList.filter(item => item.id == id);
        
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
        
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        
        getItem(id)
        .then(res => {
            setItem(res);
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