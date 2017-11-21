import React, { Component } from 'react';
import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={`${style.item} ${style.Header}`}>
           <h1 className={style.title}>New_Project</h1>
      </div>
    );
  }
}

export default Header;
