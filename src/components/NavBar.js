import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import propTypes from 'prop-types';

library.add(fab);

const NavBar = ({ onLogin, userID, onLogout }) => (

  <div className="navbar">
    <div className="logo-div">
      <FontAwesomeIcon icon={['fab', 'fort-awesome']} size="5x" />
    </div>
    <div className="title-div">
      <h2 className="title">
        Surreal Estate
      </h2>
    </div>
    <Menu isOpen={false} right>
      <Link className="menu-item" to="/">Home</Link>
      <Link className="menu-item" to="/view-properties">View Properties</Link>
      <Link className="menu-item" to="/add-property">Add A Property</Link>
      <Link className="menu-item" to="/saved-properties">Saved Properties</Link>

      <div className="login-button">
        {userID
          ? <button className="logout" type="button" onClick={onLogout}>LOG OUT</button>
          : (
            <FacebookLogin
              appId="2922267847882493"
              autoLoad={false}
              fields="name,email,picture"
              callback={onLogin}
            />
          )}
      </div>
    </Menu>
  </div>
);

NavBar.propTypes = {
  onLogin: propTypes.func.isRequired,
  userID: propTypes.number.isRequired,
  onLogout: propTypes.func.isRequired,
};

export default NavBar;
