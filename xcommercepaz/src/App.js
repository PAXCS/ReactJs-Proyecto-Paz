import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './pages/Cart/Cart.jsx';
import {Routes, Route } from 'react-router-dom';
import Checkout from './components/checkout/checkout.jsx';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  );
}

export default App;
