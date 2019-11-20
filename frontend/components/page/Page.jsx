import "./page.css";
import React from "react";
import PropTypes from "prop-types";

class Page extends React.Component {
  render () {
    return (
      <div className="container page">
        {this.props.children}
      </div>
  );
  }
}

export default Page
