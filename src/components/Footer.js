// src/components/Footer.js

import React from 'react';
import './Footer.css'; // We'll create this next

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Muskaan Raza. All rights reserved.</p>
      <p>Connect: 
        <a href=":muskaanraza42@gmail.com"> Email </a> | 
        <a href="https://www.linkedin.com/in/muskaan-raza-3b2090212" target="_blank" rel="noreferrer"> LinkedIn </a> | 
        <a href="https://github.com/100muskaanraza/muskan" target="_blank" rel="noreferrer"> GitHub </a>
      </p>
    </footer>
  );
}