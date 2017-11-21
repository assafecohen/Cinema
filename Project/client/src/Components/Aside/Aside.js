import React, { Component } from 'react';
import style from './Aside.css';

class Aside extends Component {
  render() {
    return (
      <div className={`${style.item} ${style.aside}`}>
        <h2>Aside</h2>
      </div>
    );
  }
}

export default Aside;
