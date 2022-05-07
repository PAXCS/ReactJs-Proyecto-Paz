import React, {useState} from 'react';
import './ItemCount.css';

function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState (initial);

    function handlePlusButton() {
        if (count < stock) {
            setCount(count + 1);
        }
    }


    function handleMinusButton() {
        if (count >0) {
            setCount(count - 1)
        }
    }

    return (
    
        <div className='itemCount-container'>
            <div className='producto'>
            
            </div>   
            <div>
                <button className='contador' onClick={() => handleMinusButton()}> - </button>
                <input readOnly value={count} />
                <button className='contador' onClick={() => handlePlusButton()}> + </button>
            </div>
                <button className='agregar' onClick={() => (count <= stock) && onAdd(count)}> Agregar al carrito</button>
        </div>
        
    );
};

export default ItemCount;