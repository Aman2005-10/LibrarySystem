import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <ul style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <li style={{listStyle:"none",margin:' auto 20px'}}><Link to="/">Home</Link></li>
            <li style={{listStyle:"none",margin:' auto 20px'}}><Link to="/browse">Browse Books</Link></li>
            <li style={{listStyle:"none",margin:' auto 20px'}}><Link to="/add">Add Book</Link></li>
        </ul>
    </nav>
);

export default Navbar;
