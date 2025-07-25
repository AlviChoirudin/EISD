import './App.css';
import {useEffect, useState} from 'react';
import ProductList from './component/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  const processedProducts = products
    .map(product => ({
    ...product,
    price: product.price * 0.2
  }))
  .filter(product => product.rating.rate > 4.0);

  
  return (
    <div className="App">
      <h1>FakeStore Products</h1>
      <ProductList products={processedProducts} /> 
    </div>
  );
}

export default App;
