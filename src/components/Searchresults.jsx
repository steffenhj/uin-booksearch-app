import React, { useState, useEffect } from "react";
import BookCard from "./Bookcard";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);


    useEffect(() => {
      fetchBooks('James bond');
  }, []); 

  const fetchBooks = async (searchQuery) => {
      try {
          const response = await fetch(`http://openlibrary.org/search.json?title=${searchQuery}`);
          const data = await response.json();
          setBooks(data.docs);
      } catch (error) {
          console.error('Error getting books', error);
      }
  };

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (query.length >= 3) {
            fetchBooks(query);
        } else {
            console.log("Enter alteast three characters before searching.")
        }
    };

    return (
        <div>
            <div className="navbar">
                <h1>Welcome to My Book Search App</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search for books."
                    />
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

            <div className="book-list">
                {books.map((book) => (
                    <BookCard
                        key={book.key}
                        title={book.title}
                        publishyear={book.first_publish_year}
                        forfatter={book.author_name && book.author_name[0]}
                        avgRating={book.ratings_average}
                        bookCover={`http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`} 
                        bookIsbn={book.isbn}
                    />
                ))}
            </div>
        </div>
    );
}