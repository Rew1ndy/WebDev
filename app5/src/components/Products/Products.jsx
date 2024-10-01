import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { category, productName } = useParams();

  return (
    <div>
      <h2>{productName}</h2>
      <p>Category: {category}</p>
    </div>
  );
}

export default Product;
