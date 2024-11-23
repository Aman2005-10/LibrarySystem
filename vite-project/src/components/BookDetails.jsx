import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
    const { id } = useParams();
    const book = useSelector((state) => state.books.find((b) => b.id === Number(id)));

    if (!book) return <h1>Book Not Found</h1>;

    return (
        <div style={{textAlign:"center"}}>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <p>Rating: {book.rating}</p>
            <Link to="/browse">Back to Browse</Link>
        </div>
    );
};

export default BookDetails;
