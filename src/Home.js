import React from 'react';
import mainImage from './main.png'; // Replace with your actual image path
import './App.css';
const Home = () => {
    return (
        <div className="main-content">
            {/* <h1>Welcome to Delhi Metro</h1>
            <p>Explore metro routes, analysis, and more.</p> */}
            <img
                src={mainImage}
                alt="Delhi Metro"
                className="center-image"
            />
        </div>
    );
};

export default Home;
