import React, { Component } from "react";
import css from "../styles/login.css";
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";



export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleUsernameInput (event){
    this.setState({username: event.target.value});
  }

  handlePasswordInput (event){
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
      url: 'http://localhost:5002/login',
      data: reqData,
      async: true,
      crossDomain: true,
      headers: { 
        "Content-Type": "application/javascript",
        "Cache-Control": "no-cache"
      }
    })
    .then((response) => {
      if(response.data === "success"){
        this.props.userLoginHandler();
        this.setState({ message: this.props.IsUserLoggedIn});
      }
      else if(response.data === "failure"){
        this.setState({ message: "invalid username or password"});
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <section className = "form-container" >
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label htmlFor="username" className="label-username">Username</label>
          <input type="username" className="input-username" onChange={ this.handleUsernameInput } value={ this.state.username }/>
          <label htmlFor="password" className="label-password">Password</label>
          <input type="password" className="input-password" onChange={ this.handlePasswordInput  } value={ this.state.password }/>
          <input type="submit" value="Login" className="btn btn-login" />
        </form>
        <p className = "error-msg login-error-msg">{this.state.message}</p>
      </section>
    )
  }
}