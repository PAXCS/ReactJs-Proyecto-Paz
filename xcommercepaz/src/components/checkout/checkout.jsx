import {useState,useContext } from 'react';
import { collection, addDoc} from "firebase/firestore";
import { Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import db from '../..';
import CartContext from '../../context/cart-context';
import './checkout.css';

//Componente con los metdos y funciones aplicados necesarios para la finalización de la compra

const Checkout = () => {
    

    const {products,getTotalPrice, clear}= useContext(CartContext)

    const [load, setLoad] = useState(false)
    const [orderID, setOrderID] = useState()
    
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    })

    const {Nombre, Email, Telefono} = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generateOrder = async (data) => {
       setLoad(true)
        try {
            const col = collection(db,"Orders")
            const order = await addDoc(col, data) 
            setOrderID(order.id)
            clear()
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = products.map(e=> {return {id:e.id,title:e.title,price:e.price,quantity:e.quantity}})     
        const total = getTotalPrice()
        const data = {buyer,items,dia,total}
        console.log("data",data)  
        generateOrder(data)
        
        
    }
    

    return (
        <>
            
            {load ? <Spinner />
                : (!orderID && 
                <div className='form-container'>
                    <h4 >Completar Datos:</h4>
                    <form  onSubmit={handleSubmit}>
                        <input
                            className='input-form'
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            className='input-form'
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            className='input-form'
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-success submit-button"
                        />
                    </form>
                </div>)
            }

            <div className='fin-compra-container'>
            {
                orderID && (
                    <span className='fin-compra'>
                        <h4>Compra finalizada con éxito.</h4>
                        <h4 >Su código de compra es: </h4> <h4 className='orden-number'>{`${orderID}`}</h4>
                        <h4 className='agradecimiento'><br />GRACIAS POR CONFIAR EN <br /> XCOMMERCE </h4>
                        <Link  to="/"><button className='volver-button'>Volver a incio</button></Link>
                    </span>
                    )
            }
            </div>

       
          
          <footer className='row col-12'>
            <div className='footer-data'> <strong>XcommercE ™️ </strong> <br className='street' /><i> Calle falsa 123 - Springfield <br className='legal' />Todos los derechos reservados </i></div>
          </footer>
          </>
    )
}

export default Checkout