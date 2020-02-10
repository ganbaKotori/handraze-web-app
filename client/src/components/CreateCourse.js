import React from "react";
import "../App.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;
