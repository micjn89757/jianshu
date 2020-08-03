import React, { Component } from 'react';
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class Writer extends Component {
  render() {
    const { loginStatus }  = this.props
    console.log(loginStatus);
    if (loginStatus) {
      return (
        <div>w</div>
      );
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(["login", "login"])
  }
}

export default connect(mapStateToProps, null)(Writer);