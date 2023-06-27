import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {"iphone"}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
