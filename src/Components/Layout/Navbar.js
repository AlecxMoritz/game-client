import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div style={{ margin: 0, backgroundColor: 'black', padding: 10 }}>
      <h3 className="nav">{props.title}</h3>
      <div>
        {props.links.map(link => {
          return <span className="nav-link" onClick={() => alert(`A user clicked on ${link}!!`)}>{link}</span>
        })}
      </div>
      <hr className="divider"/>
      <p className="promo-link">
        Check out our <span className="promo-link">{`Let's play ${props.promoGame}`}</span>!!
        </p>
    </div>
  )
};

export default Navbar;
