import React from 'react';
import '../styles/productSlide.css'; 

const ProductSlide = () => {
    const products = [
        {
            image: "/image/image1.jpeg", 
            title: "Product 1",
            description: "This is the description for Product 1.",
        },
        {
            image: "/image/image.jpeg",
            title: "Product 2",
            description: "This is the description for Product 2.",
        },
        {
            image: "/image/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.avif",
            title: "Product 3",
            description: "This is the description for Product 3.",
        }
    ];

    return (
        <div className="product-slide">
            <h1 className="resource-heading">Product</h1>
            <h2 className="resource-subheading">Explore our curated product</h2>
            {products.map((product, index) => (
                <div className="product-card" key={index}>
                    <img src={product.image} alt={product.title} className="product-image" />
                    <div className="product-info">
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-description">{product.description}</p>
                        <button className="product-button">Learn More</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSlide;
