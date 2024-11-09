import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDets.css'; // Make sure to create and style this CSS file

function ProductDetails() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/fetchproducts/${id}`); // Replace with your API URL
                console.log("res: ", response);
                if (!response.ok) throw new Error('Failed to fetch product');
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="product-details">
            <img src={product.image || "/images/placeholder.jpg"} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
}

export default ProductDetails;
