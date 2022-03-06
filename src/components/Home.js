import React from 'react';
import '../styles/Home.css';
import homeImg from '../images/pexels-marianne-238385.jpg';
import famImg from '../images/pexels-vidal-balielo-jr-1682497.jpg';

const Home = () => (
  <div className="homepage">
    <div className="homepage-box">
      <p className="homepage-text">Search properties for sale in the UK</p>
      <button className="view-button"><a href="/view-properties"></a>
Search
</button>
      <img className="homeImg" src={homeImg} alt="house" />
    </div>
    <div className="homepage-secondbox">
      <h2 className="home-h2">Ready to move on?</h2>
      <p className="homepage-secondtext">Add your property to the market now with our simple form!</p>
      <button className="add-link-button"><a href="/add-property"></a>Add</button>
      <img className="famImg" src={famImg} alt="family" />
    </div>
  </div>
);

export default Home;
