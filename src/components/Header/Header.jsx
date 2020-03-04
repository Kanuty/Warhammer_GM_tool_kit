import React from 'react';
import PropTypes from 'prop-types';

import WarhammerLogo from '../../img/WarhammerLogo.png'
import './style.css';

const Header = (props) => {
  const {
    author,
    link,
    logo,
    text,
    ver,
  } = props;

  return (
  <header>
    <img
      src={logo}
      alt='logo'
    ></img>
    <p>{text}</p>
    <h5>{ver}</h5>
    <h5>creator:</h5>
    <a href={link}>{author}</a>
  </header>
  )
};

Header.propTypes = {
  author: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
  text: PropTypes.string,
  ver: PropTypes.string,
};

Header.defaultProps = {
  author: 'Bartosz Dudek',
  link: 'https://www.linkedin.com/in/bartosz-dudek-050362120/',
  logo: WarhammerLogo,
  text: 'Warhammer GM tool kit',
  ver: 'W.I.P. ver 0.5.1'
};

export default (Header);