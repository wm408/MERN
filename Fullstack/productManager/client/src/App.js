import './App.css';
import React from 'react';
// import axios from 'axios'; // remember to: 'npm i axios' in client folder.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ProductManager from './components/ProductManager';
// import ProductList from './components/ProductList';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import ProductUpdate from './components/ProductUpdate';

function App() {
  // const [productTitle, setProductTitle] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/api/products/:id" element={<ProductDetail />}/>
        <Route path="/api/products/edit/:id" element={<ProductUpdate />}/> 
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
