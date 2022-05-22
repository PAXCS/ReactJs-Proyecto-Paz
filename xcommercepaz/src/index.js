import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { CartContextProvider } from './context/cart-context';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqkTLe-QWEpPz7cx9sk1lDaFvDF5o7rPg",
  authDomain: "xcommercepaz.firebaseapp.com",
  projectId: "xcommercepaz",
  storageBucket: "xcommercepaz.appspot.com",
  messagingSenderId: "336050128332",
  appId: "1:336050128332:web:9ba9f321ca8ab21bbe0969"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
