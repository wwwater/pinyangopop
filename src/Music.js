import React, { Component } from 'react';
import './Music.css';

class Music extends Component {
  render() {
    return (
      <div id="Music">
        {downloadLink("Great song", "favicon.ico")}
        {downloadLink("Great song number 2", "favicon.ico")}
        {downloadLink("Another great song", "favicon.ico")}
      </div>
    );
  }
}

function downloadLink(title, url) {
  return (
    <a
        href={url} 
        className="song"
        target="_blank"
        rel="noopener noreferrer"
        download>
      {title}
    </a>
  );
}

export default Music;
