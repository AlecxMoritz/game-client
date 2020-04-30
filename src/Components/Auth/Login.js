import React, { useState } from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '30vw',
  },
  inputs: {
    margin: '1rem 0',
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'slateblue',
    borderColor: 'slateblue',
    color: 'white',
    borderRadius: 5,
  }
};

const Login = (props) => {
  // email
  const [email, setEmail] = useState('');

  // password
  const [password, setPassword] = useState('');

  // valid form
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    if(email.length > 0 && password.length > 0) {
      setIsFormValid(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3001/user/signin';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type' : 'application/json'
      },
    })
    .then(data => data.json())
    .then(userData => props.login(userData.sessionToken))
    .catch(err => console.warn(err));
  };

  return (
    <div>
      <h5>Log In</h5>
      <form style={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <input
          style={styles.inputs}
          type="text"
          id="emailField"
          name="email"
          className="input-field"
          onChange={(e) => {
              setEmail(e.target.value);
              validateForm();
            }
          }
        />
        <label htmlFor="password">Password</label>
        <input
          style={styles.inputs}
          type="password"
          id="passwordField"
          name="password"
          className="input-field"
          onChange={(e) => {
              setPassword(e.target.value);
              validateForm();
            }
          }
        />
        { /*  use isFormIsValid to enable/disable this input  */ }
        <input style={styles.submitButton} type="submit" disabled={!isFormValid}/>
      </form>
    </div>
  )
};

/*
  Using the useState hook, create another state variable, and
  function to update it with, for a state value called isFormValid.
  Modify your onChange handlers to check if both email, and
  password are valid strings, and set isFormValue to true in that
  case. A valid string is a string that is longer than 0 characters,
  meaning it has length. Lastly, enable/disable the submit button
  based on if isFormValid is true or false.

  isFormValid === true / submit should be enabled
  isFormValid === false / submit should be disabled

*/




export default Login;
