import React, { Component } from 'react';
import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={`${style.item} ${style.Header}`}>
        <ul className={style.nav_container}>
          <li>Home</li>
          <li>Comedy</li>
          <li>Action</li>
          <li>Login</li>
        </ul>
      </div>
    );
  }
}

export default Header;
