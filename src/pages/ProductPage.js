import React from "react";
import product from '../data/products';
import './ProductPage.css';

function ProductPage() {
    return (
        <div style={{ padding: "30px" }}>
            <h2>Available Plants</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
                {product.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "400px",borderRadius:"5px" }}>
                        <img src={product.image} alt={product.name} className="plant-image" />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' ,padding:'10px'}}>
                            <span>{product.name}</span>
                            <span>${product.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductPage;