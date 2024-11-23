import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const BrowseBooks = () => {
    const { category } = useParams();
    const books = useSelector((state) => state.books);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = books.filter((book) =>
        (!category || book.category === category) &&
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <h1 style={{textAlign:"center"}}>{category ? `${category} Books` : 'All Books'}</h1>
            <input
                type="text"
                placeholder="Search by title or author"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            style={{width:"50%",display:"block", margin:"auto",padding:"8px"}}  />
            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.id} style={{textAlign:"center", listStyle:"none", margin:"20px"}}>
                        {book.title} by {book.author}{' '}
                        <Link to={`/book/${book.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseBooks;
