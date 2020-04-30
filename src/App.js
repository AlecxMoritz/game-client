import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import AuthForm from './Components/Auth/AuthForm';
import Home from './Components/Home/Home';

function App() {
  const siteTitle = 'WickedGames';
  const navLinks = [ 'Home', 'About', 'Games', 'Contact' ];
  const promoGame = 'RuneScape';

  // isAuthenticated - state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  const login = (sessionToken) => {
    // update auth status - isAuthenticated
    setIsAuthenticated(true);

    // store our token
    setToken(sessionToken);
  };

  return (
    <div className="app">
      <Navbar style={{ backgroundColor: 'blue' }} title={siteTitle} links={navLinks} promoGame={promoGame} />
      <div className="app-text">

        {isAuthenticated ? <Home tokenProp={token} /> : <AuthForm login={login} /> }

      </div>
    </div>
  );
}

export default App;
