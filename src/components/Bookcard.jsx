import React from "react"
import "../styles/Bookcard.css"
import { Link } from "react-router-dom";

const Bookcard = ({ title, publishyear, forfatter, avgRating, bookCover, amazonId }) => {

    const isbn = amazonId && amazonId.length > 0 ? amazonId[0] : null;

    const amazonUrl = `https://www.amazon.com/s?k=${isbn}`
    const bookTitle = title.split('[')[0].trim(); 
    const ratingDecimal = avgRating !== undefined && avgRating !== null ? avgRating.toFixed(1) : "N/A";

    return (
        <div className="book-card">
            <div className="image-container">
                <img src={bookCover} alt="Cover image" className="book-cover"></img>
            </div>
            
            <div className="card-content">
                <h2>{bookTitle}</h2>
                <p>Year published: {publishyear}</p>
                <p>Author: {forfatter}</p>
                <p>Rating: {ratingDecimal}</p>
                <a href={amazonUrl} target="_blank">
                    <button>Book on Amazon</button>
                </a>
                

            </div>
        </div>
    );
};

export default Bookcard