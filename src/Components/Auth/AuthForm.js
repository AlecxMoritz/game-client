import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const AuthForm = (props) => {
  //          1            2                  3
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  // 1 - variable that holds our state value
  // 2 - function to update that state value

  // 3 - useState's parameter is the initial value of the state variable

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {
        isLoggingIn ? <p>Welcome Back, Please Log In</p> : <p>Welcome, Please Sign Up</p>
      }
      {
        isLoggingIn ? <Login login={props.login} /> : <SignUp login={props.login} />
      }
      {
        isLoggingIn ? (
          <p onClick={(e) => setIsLoggingIn(!isLoggingIn)}>Need to Sign Up?</p>
        ) : (
          <p onClick={(e) => setIsLoggingIn(!isLoggingIn)}>Need to Log In?</p>
        )
      }
    </div>
  )
};


/*

  Try to use React onClick event handler & setIsLoggingIn
  to toggle between true/false for isloggingIn

  if false - become true
  if true - become false

  Based on clicking the <p> on line 17 & 19

*/

export default AuthForm;
