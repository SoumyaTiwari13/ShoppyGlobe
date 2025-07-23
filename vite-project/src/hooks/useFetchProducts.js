// useFetchProducts.js - Custom hook to fetch product list

import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

   // Fetch products from dummy API
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(() => setError('Failed to fetch products'));
  }, []);

    // Return products and any error
  return { products, error };
};

export default useFetchProducts;