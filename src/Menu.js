import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div id="Menu">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Music">Music</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Video">Video</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
