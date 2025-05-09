import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="landing">
            <div className="overlay">
                <h2>Welcome to Paradise Nursery </h2>
                <p>your one-stop shop for beautiful, healthy houseplants that bring life and tranquility to your home.
                    Whether you're a seasoned plant parent or just getting started, our carefully curated selection includes low-maintenance greenery, tropical delights, and flowering favorites to brighten every room.
                    Let nature thrive inside your space with plants you'll love to grow!</p>
                <button className="startedButton" onClick={() => navigate("/products")}>Get Started </button>
            </div>
        </div>
    )
}

export default LandingPage