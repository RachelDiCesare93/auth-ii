import React, { Component } from 'react';



class Signin extends Component {
    state = {
        username: '',
        password: '',
    };
  render() {
    return (
      <form onSubmit={this.signin}>
          <div>
            <label>Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </div>
          <div>
            <button type = "submit">Signin</button>
          </div>
      </form>
    );
  }
  handleChange = event => {
      const { name , value } = event.target;

      this.setState({ [name]: value });
  };
  signin = event => {
      event.preventDefault();
    
  };
}

export default Signin;