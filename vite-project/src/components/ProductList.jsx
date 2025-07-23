// ProductList.jsx - Displays a searchable grid of products


import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import { useState } from 'react';

export default function ProductList() {
  const { products, error } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
      {error ? <p>{error}</p> : filtered.map(p => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}
