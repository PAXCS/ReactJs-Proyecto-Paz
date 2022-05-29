import { createContext, useState } from "react";

//Contex con las funciones generales

const CartContext = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    clear: () => {},
    isInCart: () => {},
    getCartQuantity: () => {},
    getTotalPrice: () => {}
});

export const CartContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    // Agrega producto al carrito

    const addProduct = (product) => {
        const repeatedItemIndex = productList.findIndex(item => item.id === product.id)
        if (repeatedItemIndex !== -1) {
            setProductList(productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p));
        } else {
            setProductList([product, ...productList]);
        }
    }

    //Quita un producto del carrito

    const removeProduct = (id) => {
        const indexToRemove = productList.findIndex(item => item.id === id);
        if (productList[indexToRemove].quantity === 1) {
            setProductList(productList.filter(i => i.id !== id))
        } else {
            setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity - 1} : p));
        }
    }

    //Vuelve a cero el contenido el carrito

    const clear = () => {
        setProductList([]);
    }

    //Para saber si el articulo no está en el carrito

    const isInCart = (id) => {
        return productList.map(p => p.id).indexOf(id) !== -1;
    }

    //Obtiene el valor total de articulos

    const getCartQuantity = () => {
        return productList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }

    //Obtiene el precio de la suma total de artículos

    const getTotalPrice = () => {
        return productList.reduce((total, value) => {
            return total + value.price*value.quantity
        }, 0) 
    }
    

    return (
        <CartContext.Provider value={{
            products: productList,
            addProduct,
            removeProduct,
            clear,
            isInCart,
            getCartQuantity,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;