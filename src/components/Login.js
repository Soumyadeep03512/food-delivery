import React, { Component } from "react";
import fire from "../config/Fire";
import "./login.css";
import AOS from "aos";
import "aos/dist/aos.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        alert("Wrong credentials");
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        alert("Already Registered");
      });
  }

  componentDidMount() {
    AOS.init({ duration: 800, once: true });
  }

  render() {
    return (
      <div className="login" data-aos="fade-right">
        <form className="loginform">
          <p>Email</p>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
          />
          <p>Password</p>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
          />
          <br />

          <button type="submit" className="loginbutton" onClick={this.login}>
            Login
          </button>

          <button type="submit" className="loginbutton" onClick={this.signup}>
            Signup
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
