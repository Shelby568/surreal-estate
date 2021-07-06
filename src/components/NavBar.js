import React, { useState } from 'react';
import '../styles/NavBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import Modal from 'react-modal';
import FacebookLogin from 'react-facebook-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo';

library.add(fab);

const NavBar = ({ onLogin, userID, onLogout }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      height: '9%',
      width: '11%',
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'visible',
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <Logo />
      <ul className="navbar-links">
        <li className="li-link">
          <a href="/">Home</a>
        </li>
        <li className="li-link">
          <a href="/view-properties">View Properties</a>
        </li>
        <li className="li-link">
          <a href="/add-property">Add Property</a>
        </li>
        <li className="li-link">
          <a href="/saved-properties">Saved Properties</a>
        </li>
        <li className="li-link">
          <button type="button" className="login-button" onClick={() => { openModal(); }}><FontAwesomeIcon icon={faUserCircle} /></button>
        </li>
      </ul>
      <div className="login-modal">
        <Modal
          shouldCloseOnOverlayClick
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
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
        </Modal>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: propTypes.func.isRequired,
  userID: propTypes.string.isRequired,
  onLogout: propTypes.func.isRequired,
};

export default NavBar;
