import React from 'react';
import PropTypes from 'prop-types';

import WarhammerLogo from '../../img/WarhammerLogo.png'
import './style.css';

const Header = (props) => {
  const {
    logo,
    text,
  } = props;

  return (
  <header>
    <img
      src={logo}
      alt='logo'
    ></img>
    <p>{text}</p>
  </header>
  )
};

Header.propTypes = {
  logo: PropTypes.string,
  text: PropTypes.string,
};

Header.defaultProps = {
  logo: WarhammerLogo,
  text: 'Warhammer GM tool kit',
};

export default (Header);