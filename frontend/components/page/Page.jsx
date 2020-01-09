import "./page.css";
import React from "react";
import PropTypes from "prop-types";

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  updateCurrentUser(email) {
    this.state = {
      currentUser: email
    }
  }

  componentDidMount() {
    fetch('/users/check_for_user', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(result => {
      console.log(result.email);
      if (result.email) {
        this.setState({
          currentUser: result.email
        })
      } else {
        this.setState({
          currentUser: null
        })
      }
    })
  }

  render () {
    return (
      <div className="container page">
        {this.props.children}
      </div>
  );
  }
}

export default Page
