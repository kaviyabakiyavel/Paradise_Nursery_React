import React from "react";
import product from '../data/products';

function ProductPage() {
    return (
        <div>
            <h2>Available Plants</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {product.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                        <img src={product.image} alt={product.name} width="100%" />
                        <h4>{product.name}</h4>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductPage;