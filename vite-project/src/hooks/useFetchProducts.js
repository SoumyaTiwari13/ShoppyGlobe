import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(() => setError('Failed to fetch products'));
  }, []);

  return { products, error };
};

export default useFetchProducts;