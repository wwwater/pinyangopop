import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  render() {
    return (
      <div id="Video">
        <div id="videosCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
          <ol className="carousel-indicators">
            <li data-target="#videosCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#videosCarousel" data-slide-to="1"></li>
            <li data-target="#videosCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {videoInIframe("Amanecer", "https://www.youtube.com/embed/nfMh5yfrcIU")}
            </div>
            <div className="carousel-item">
              {videoInIframe("smth", "https://www.youtube.com/embed/qKWTB_s2Q_Q")}
            </div>
            <div className="carousel-item">
              {videoInIframe("smth2", "https://www.youtube.com/embed/qKWTB_s2Q_Q")}
            </div>
          </div>
          <a className="carousel-control-prev" href="#videosCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#videosCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

function videoInIframe(title, url) {
  return (
    <iframe
      title={title}
      className="video"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen />
  );
}

export default Video;
