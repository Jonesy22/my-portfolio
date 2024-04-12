
import React from "react";

export default function Header() {
    const headerStyle = {
      backgroundColor: '#69a5ff',  // Light grey background
      padding: '100px 0',           // Padding top and bottom
      margin: '0 auto',            // Removes default margin
      textAlign: 'center',         // Centers the text
      color: "white",               // Dark grey text color
      fontSize: '48px',            // Larger text
      fontFamily: 'Arial, sans-serif'  // Font styling
    };
  
    return (
      <header style={headerStyle}>
        Happy Birthday Ellie!
      </header>
    );
  }