import React, { Component } from "react";
import css from "../styles/login.css";
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";

export default class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameInfo = this.handleUsernameInfo.bind(this);
    this.handlePasswordInfo = this.handlePasswordInfo.bind(this);
  }

  handleUsernameInfo(event){
    this.setState({username: event.target.value});
  }

  handlePasswordInfo(event){
    this.setState({password: event.target.value});
  }



  handleSubmit(event) {
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    var reqData = {
      "username": username,
      "password": password
    };
    axios({
      method: 'post',
      url: 'http://localhost:5002/auth',
      data: reqData,
      async: true,
      crossDomain: true,
      headers: { 
        "Content-Type": "application/javascript",
        "Cache-Control": "no-cache"
      }
    })
    .then((response) => {
      this.setState({ message: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label htmlFor="username" className="label-username">Username</label>
          <input type="username" className="input-username" onChange={ this.handleUsernameInfo } value={ this.state.username }/>
          <label htmlFor="password" className="label-password">Password</label>
          <input type="password" className="input-password" onChange={ this.handlePasswordInfo } value={ this.state.password }/>
          <input type="submit" value="Login" className="btn btn-login" />
        </form>
        <p className = "error-msg login-error-msg">{this.state.message}</p>
      </div>
    )
  }
}