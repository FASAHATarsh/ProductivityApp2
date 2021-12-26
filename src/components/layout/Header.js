import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>To-do List</h1>
        </header>
    )
};

const headerStyle = {
    background: "#B07840",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;