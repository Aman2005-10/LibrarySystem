import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1 style={{textAlign:"center",marginTop:"4%"}}>Welcome to My Online Library..</h1>
        <h2 style={{textAlign:"center", marginTop:"2%"}}>Book Categories</h2>
        <ul>
            <li style={{listStyle:"none",margin:' 20px 20px', display:"flex",justifyContent:"center"}}><Link to="/books/Fiction">Fiction</Link></li>
            <li style={{listStyle:"none",margin:' 20px 20px', display:"flex",justifyContent:"center"}}><Link to="/books/Non-Fiction">Non-Fiction</Link></li>
            <li  style={{listStyle:"none",margin:' 20px 20px', display:"flex",justifyContent:"center"}}><Link to="/books/Sci-Fi">Sci-Fi</Link></li>
        </ul>
        <h2 style={{textAlign:"center", marginTop:"2%"}}>Popular Books</h2>
        <ul>
            <li style={{listStyle:"none",margin:' 15px 20px', display:"flex",justifyContent:"center"}}><Link to="/book/1">The Great Gatsby</Link></li>
            <li style={{listStyle:"none",margin:' 15px 20px', display:"flex",justifyContent:"center"}}><Link to="/book/2">To Kill a Mockingbird</Link></li>
            <li style={{listStyle:"none",margin:' 15px 20px', display:"flex",justifyContent:"center"}}><Link to="/book/3">1984</Link></li>
            <li style={{listStyle:"none",margin:' 15px 20px', display:"flex",justifyContent:"center"}}><Link to="/book/4">A Brief History of Time</Link></li>
            <li style={{listStyle:"none",margin:' 15px 20px', display:"flex",justifyContent:"center"}}><Link to="/book/5">The Catcher in the Rye</Link></li>
        </ul>
    </div>
);

export default HomePage;
