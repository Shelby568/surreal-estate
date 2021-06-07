import React from 'react';
import '../styles/Logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = () => (
  <div className="title-div">
    <h2 className="title">
      surrealestate
    </h2>
    <div className="logo-div">
      <FontAwesomeIcon icon={['fab', 'fort-awesome']} size="2x" />
    </div>
  </div>
);

export default Logo;
