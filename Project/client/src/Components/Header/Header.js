import React, { Component } from 'react';
import style from './Header.css';

class Header extends Component {
  
  render() {
    var onClick = this.props.onClick;
    return (
      <div className={`${style.item} ${style.Header}`}>
        <ul className={style.nav_container}>
          <li>Home</li>
          <li onClick={() => onClick('comedy')}>Comedy</li>
          <li onClick={() => onClick('action')}>Action</li>
          <li>Login</li>
        </ul>
      </div>
    );
  }
}

export default Header;
