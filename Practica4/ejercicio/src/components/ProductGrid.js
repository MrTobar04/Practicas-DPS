'use client';

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import '../styles/product-grid.css';
import products from './data'; 

const ProductGrid = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: 'pointer' }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.summary}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
