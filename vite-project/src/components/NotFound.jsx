import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{textAlign:"center",marginTop:"12%"}}>
    <h1>404 - Page Not Found</h1>
    <Link to="/">Back to Home</Link>
  </div>
);

export default NotFound;