import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  render() {
    return (
      <iframe
        title={this.props.title}
        className="video"
        src={this.props.url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    );
  }
}

export default Video;
