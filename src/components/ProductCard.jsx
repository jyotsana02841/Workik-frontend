// frontend/src/components/ProductCard.js
import React from "react";

function ProductCard({ product }) {
  console.log(product);
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {product.imageurl && (
        <img
          src={product.imageurl}
          alt={product.name}
          className="w-full h-32 object-cover rounded-md mb-2"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {product.name}
      </h3>
      <p className="text-gray-600 mb-1">Price: ${product.price}</p>
      {product.description && (
        <p className="text-gray-700 text-sm">{product.description}</p>
      )}
    </div>
  );
}

export default ProductCard;
