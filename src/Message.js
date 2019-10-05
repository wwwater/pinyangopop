import React, { Component } from 'react';
import './Message.css';

// <div className="message-date">
// {this.props.date}
// </div>
class Message extends Component {
  render() {
    if (this.props.author === "Jushepe") {
      return (
        <div className="message right-side-message">
          <div className="message-box">
            <div className={"message-author " + authorClass(this.props.author)}>
            {this.props.author}
            </div>
            <div className="message-content">
              {this.props.content}
            </div>
          </div>
          <div className="message-box-tail">
          </div>
        </div>
      );
    } else {
      return (
        <div className="message left-side-message">
          <div className="message-box-tail">
          </div>
          <div className="message-box">
            <div className={"message-author " + authorClass(this.props.author)}>
              {this.props.author}
            </div>
            <div className="message-content">
              {this.props.content}
            </div>
          </div>
        </div>
      );
    }
  }
}

function authorClass(author) {
  switch (author) {
    case "Jushepe":
      return "jushepe";
    case "Keko":
      return "eneko";
    case "Ñango":
      return "xavier";
    default:
      return "other";
  }
}

export default Message;
