import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <p>404</p>
    <p>Page Not Found</p>
    <Link to="/"><p>Return to Home Page</p></Link>
  </div>
);

export default NotFound;