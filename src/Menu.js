import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div id="Menu">
        <ul className="menu-items">
          <li className="menu-item">
            <a className="menu-link" href="#About">
              <div className="userpick userpick-jushepe"></div>
              <div className="menu-text">
                <div className="menu-text-author jushepe">Jushepe</div>
                <div className="menu-text-message">Quien somos?</div>
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#Video">
              <div className="userpick userpick-eneko"></div>
              <div className="menu-text">
                <div className="menu-text-author eneko">Eneko</div>
                <div className="menu-text-message">Videos</div>
              </div>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#Music">
              <div className="userpick userpick-xavier"></div>
              <div className="menu-text">
                <div className="menu-text-author xavier">Ñango</div>
                <div className="menu-text-message">Musica</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
