import React from 'react';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    }
    // this.setState() - allows updates to entire state object
  }

  // endpoint - /user/signup

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const url = 'http://localhost:3001/user/signup';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type' : 'application/json',
      }
    })
    .then(data => data.json())
    .then(userData => {
      console.log(userData);
      // userData.sessionToken

      this.props.login(userData.sessionToken);
    })
    .catch(err => console.warn(err));
  }

  render() {
    // possible logic
    return (
      <div>
        { /* renderable JSX here */ }
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          <input type="submit" />
        </form>

      </div>
    )
  }
}

export default SignUp;
