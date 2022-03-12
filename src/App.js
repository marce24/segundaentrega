import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

// Función App con los ruteos definidos y la navegación

function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
    </>
  );
}

export default App;
