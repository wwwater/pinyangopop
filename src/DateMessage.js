import React, { Component } from 'react';
import './DateMessage.css';

class DateMessage extends Component {
  render() {
    return (
      <div className="date-message">
        {this.props.date}
      </div>
    );
  }
}

export default DateMessage;
