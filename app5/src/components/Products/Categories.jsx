import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Contexts/ProductContext';

function Categories({ addPage }) {
  const { products } = useContext(ProductContext);

  return (
    <div className='categories'>
      <h2>Categories</h2>
      {Object.keys(products).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {products[category].map((product) => (
            <div key={product}>
              <Link to={`/product/${category}/${product}`} onClick={() => addPage(product)}>
                {product}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Categories;
