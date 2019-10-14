import React, { Component } from 'react';
import './Preview.css';


// TODO make whole preview the link
class Preview extends Component {
  render() {
    return (
      <div>
        <div className="preview">
          <div className={"preview-image " + this.props.image}>
          </div>
          <div className="preview-content">
            <div className="preview-content-title">
              {this.props.title}
            </div>
            <div className="preview-content-text">
              {this.props.text}
            </div>
          </div>
        </div>
        <a className="preview-url" href={this.props.url}
            target="_blank" rel="noopener noreferrer">
          {displayLink(this.props.url)}
        </a>
      </div>
    );
  }
}

function displayLink(url) {
  var maxLen = 70;
  var ellipsis = "";
  if (url.length > maxLen) {
    ellipsis = "..."
  }

  return url.substring(0, maxLen) + ellipsis;
}


export default Preview;
