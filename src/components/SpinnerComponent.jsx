import React, { Component } from 'react';
import '../css/SpinnerComponent.css';

class SpinnerComponent extends Component {
  render() {
    return(
      <div className={`spinner_container ${this.props.show ? 'show' : 'hide'}`}>
        <div className="spinner"></div>
      </div>
    )
  }
}

export default SpinnerComponent;
