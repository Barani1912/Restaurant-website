import React, { useState } from 'react'; 
import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './pages/cart/Cart';
import AboutUsPage from './pages/about/AboutUsPage';
import HomePage from './pages/home/HomePage';
import ContactUsPage from './pages/contact/ContactUsPage';
import MenuPage from './pages/menu/MenuPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import ErrorHandling from './pages/ErrorHandling';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, quantity) => {
    const updatedItems = [...cartItems];
    const existingItemIndex = updatedItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      updatedItems[existingItemIndex].quantity += quantity;
    } else {
      updatedItems.push({ ...item, quantity });
    }

    setCartItems(updatedItems);
    setTotalPrice(prevTotal => prevTotal + item.price * quantity);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage addToCart={addToCart} />} /> 
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} totalPrice={totalPrice} />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path="*" element={<ErrorHandling/>}/>
      </Routes>
    </div>
  );
}

export default App;
