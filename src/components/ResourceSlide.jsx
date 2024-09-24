import React from 'react';
import '../styles/resourceSlide.css'; 

const ResourceSlide = () => {
    const resources = [
        {
            image: "/image/superhero-car-vintage-style.jpg", 
            title: "Resource Title 1",
            description: "This is the description for resource 1.",
        },
        {
            image: "/image/superhero-car-vintage-style.jpg",
            title: "Resource Title 2",
            description: "This is the description for resource 2.",
        },
        {
            image: "/image/superhero-car-vintage-style.jpg",
            title: "Resource Title 3",
            description: "This is the description for resource 3.",
        },
        {
            image: "/image/superhero-car-vintage-style.jpg",
            title: "Resource Title 4",
            description: "This is the description for resource 4.",
        },
        {
            image: "/image/superhero-car-vintage-style.jpg",
            title: "Resource Title 5",
            description: "This is the description for resource 5.",
        },
        {
            image: "/image/superhero-car-vintage-style.jpg",
            title: "Resource Title 6",
            description: "This is the description for resource 6.",
        },
    ];

    return (
        <div className="resource-container">
            <h1 className="resource-heading">Resources</h1>
            <h2 className="resource-subheading">Explore our curated resources</h2>
            <div className="resource-cards">
                {resources.map((resource, index) => (
                    <div className="resource-card" key={index}>
                        <img src={resource.image} alt={resource.title} className="resource-image" />
                        <h3 className="resource-title">{resource.title}</h3>
                        <p className="resource-description">{resource.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourceSlide;
