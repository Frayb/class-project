import React from 'react';

const NavComp = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0, padding: 0 }}>
                <li><a href="#home" style={{ textDecoration: 'none', color: '#333' }}>Home</a></li>
                <li><a href="#about" style={{ textDecoration: 'none', color: '#333' }}>login</a></li>
            </ul>
        </nav>
    );
};

export default NavComp;