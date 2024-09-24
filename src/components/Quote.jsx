import React from 'react';
import '../styles/quote.css';

const Quote = () => {
    const quotes = [
        {
            image: "/image/wallpaperflare.com_wallpaper.jpg", 
            title: "Albert Einstein",
            description: "Theoretical Physicist",
            quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        },
        {
            image: "/image/download.jpeg", 
            title: "Maya Angelou",
            description: "Poet and Civil Rights Activist",
            quote: "You will face many defeats in life, but never let yourself be defeated.",
        },
        {
            image: "/image/wallpaperflare.com_wallpaper (1).jpg", 
            title: "Nelson Mandela",
            description: "Former President of South Africa",
            quote: "It always seems impossible until it's done.",
        },
        {
            image: "/image/wallpaperflare.com_wallpaper (2).jpg", 
            title: "Steve Jobs",
            description: "Co-founder of Apple Inc.",
            quote: "Your time is limited, so don't waste it living someone else's life.",
        },
        {
            image: "/image/wp6908650-helen-keller-wallpapers.jpg", 
            title: "Helen Keller",
            description: "Author and Activist",
            quote: "The only thing worse than being blind is having sight but no vision.",
        },
        {
            image: "/image/wallpaperflare.com_wallpaper (3).jpg", 
            title: "Mark Twain",
            description: "Author and Humorist",
            quote: "The secret of getting ahead is getting started.",
        },
    ];

    return (
        <div className="quote-container">
            <h1 className="quote-heading">Quotes</h1>
            <h2 className="quote-subheading">Inspiration for your day</h2>
            <div className="quote-cards">
                {quotes.map((quoteData, index) => (
                    <div className="quote-card" key={index}>
                        <p className="quote-text">"{quoteData.quote}"</p>
                        <div className="quote-content">
                            <img src={quoteData.image} alt={quoteData.title} className="quote-image" />
                            <div className="quote-info">
                                <h3 className="quote-title">{quoteData.title}</h3>
                                <p className="quote-description">{quoteData.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quote;
