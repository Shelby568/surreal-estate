import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import homeImg from '../images/pexels-marianne-238385.jpg';
import famImg from '../images/pexels-vidal-balielo-jr-1682497.jpg';

const Home = () => (
  <div className="homepage">
    <div className="homepage-box">
      <p className="homepage-text">Search properties for sale in the UK</p>
      <Link to="/view-properties"><button type="button" className="view-button">Search</button></Link>
      <img className="homeImg" src={homeImg} alt="house" />
    </div>
    <div className="homepage-secondbox">
      <h2 className="home-h2">Ready to move on?</h2>
      <p className="homepage-secondtext">Add your property to the market now with our simple form!</p>
      <Link to="/add-property"><button type="button" className="add-link-button">Add</button></Link>
      <img className="famImg" src={famImg} alt="family" />
    </div>
  </div>
);

export default Home;
