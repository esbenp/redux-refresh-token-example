import React, { Component } from "react";
import { connect } from "react-redux";
import { setAccessToken } from "redux-refresh-token";
import { login, logout, resource } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.resource = this.resource.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.props.dispatch(login()).then(response => {
      this.props.dispatch(setAccessToken(response.payload));
      console.log('logged in')
    });
  }

  resource() {
    this.props.dispatch(resource()).then(response => {
      console.log('resource response', response)
    });
  }

  logout() {
    this.props.dispatch(logout()).then(response => {
      console.log("logout response", response);
    });
  }

  render() {
    const { logged_in } = this.props;

    return (
      <div>
        {logged_in && [
          <button type="button" onClick={this.resource}>Resource</button>,
          <button type="button" onClick={this.logout}>Logout</button>
        ]}
        {!logged_in &&
          <button type="button" onClick={this.login}>Login</button>}
      </div>
    );
  }
}

export default connect(state => {
  return {
    logged_in: typeof state.token.access_token === "string"
  };
})(App);
