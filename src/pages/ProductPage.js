import React from "react";
import products from '../data/products';
import './ProductPage.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductPage() {
    const dispatch = useDispatch();
    return (
        <div style={{ padding: "30px" }}>
            <h2>Available Plants</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "300px",borderRadius:"5px" }}>
                        <img src={product.image} alt={product.name} className="plant-image" />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' ,padding:'10px'}}>
                            <span>{product.name}</span>
                            <span>${product.price}</span>
                        </div>
                        <button className="AddButton" onClick={() =>dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductPage;