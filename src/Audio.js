import React, { Component } from 'react';
import './Audio.css';

class Audio extends Component {
  render() {
    return (
      <div className="audio">
        {this.props.title}
        <audio controls>
          <source src={this.props.url} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

// function downloadLink(title, url) {
//   return (
//     <a
//         href={url}
//         className="song"
//         target="_blank"
//         rel="noopener noreferrer"
//         download>
//       {title}
//     </a>
//   );
// }

export default Audio;
