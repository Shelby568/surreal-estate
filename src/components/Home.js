import React from 'react';
import '../styles/Home.css';
import homeImg from '../images/addaprop.jpg';

const Home = () => (
  <div className="homepage">
    <div className="homepage-box">
      <p className="homepage-text">View, add and even save your favourite properties with the Surreal Estate! </p>
      <img src={homeImg} alt="house" />
    </div>
  </div>
);

export default Home;
