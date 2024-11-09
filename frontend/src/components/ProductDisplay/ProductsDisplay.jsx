// ProductsDisplay.jsx
import React, { useState } from 'react';
import './ProductsDisplay.css';
import { useNavigate } from 'react-router-dom';

function ProductsDisplay({ products }) { // Accept products as a prop
    const [productsPerRow, setProductsPerRow] = useState(4); // Default 4 products per row
    const [sortOption, setSortOption] = useState('name-asc'); // Default sorting by Name A-Z
    const navigate = useNavigate();

    // Handle change of products per row
    const handleProductsPerRowChange = (event) => {
        setProductsPerRow(Number(event.target.value));
    };

    // Handle sorting change
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    // Sort products based on selected option
    const sortedProducts = [...products].sort((a, b) => {
        switch (sortOption) {
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            default:
                return 0;
        }
    });

    // Navigate to product details page when a product card is clicked
    const handleCardClick = (productId) => {
        navigate(`/product/${productId}`); // Navigate to ProductDets page with the product ID
    };

    return (
        <div className="products-container">
            <div className="options">
                <label htmlFor="products-per-row">Products per row: </label>
                <select id="products-per-row" onChange={handleProductsPerRowChange} value={productsPerRow}>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="options">
                <label htmlFor="sort-by">Sort By: </label>
                <select id="sort-by" onChange={handleSortChange} value={sortOption}>
                    <option value="name-asc">Name A-Z</option>
                    <option value="name-desc">Name Z-A</option>
                    <option value="price-asc">Price low to high</option>
                    <option value="price-desc">Price high to low</option>
                </select>
            </div>
            <div className="products-grid" style={{ gridTemplateColumns: `repeat(${productsPerRow}, 1fr)` }}>
                {sortedProducts.map((product) => (
                    <div 
                        key={product._id} 
                        className="product-card" 
                        onClick={() => handleCardClick(product._id)} // Click handler for product card
                    >
                        <img
                            src="/images/kurta.jpg" // Placeholder image
                            alt={product.name}
                            className="product-image"
                        />
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-brand">{product.brand}</p>
                            <p className="product-price">₹{product.price}</p>
                        </div>
                        <div className="product-actions">
                            <button className="cart-button">
                                <i className="fas fa-cart-plus"></i> {/* Add to cart icon */}
                            </button>
                            <button className="wishlist-button">
                                <i className="fas fa-heart"></i> {/* Wishlist heart icon */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsDisplay;
