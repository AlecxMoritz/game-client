import React from 'react';

const styles = {
  container: {
    margin: '2em auto',
    backgroundColor: 'black',
    color: 'whitesmoke',
    borderRadius: 5,
    width: '60%',
    padding: 5,
  },
  list: {
    listStyleType: 'none'
  }
};

// <span style={ props.game.esrbRating === 'E' ? { color: 'green' } : { color: 'red' } }>{props.game.esrbRating}</span>


const GamesListItem = (props) => {


  const ratingStyles = {
    "M": {
      color: 'red',
    },
    "T": {
      color: 'yellow',
    },
    "E": {
      color: 'green',
    }
  }

  const renderedRating = ((rating) => {
    switch(props.game.esrbRating) {
      case 'E':
        return <span style={{ color: 'green' }}>E</span>
      case 'T':
        return <span style={{ color: 'yellow' }}>T</span>
      default:
        return <span style={{ color: 'red' }}>M</span>
    }
  })();

  return (
    <div style={styles.container}>
      <h2 style={{ color: 'pink' }}>{props.game.name}</h2>
      <hr style={{ borderColor: 'pink', width: '80%' }}/>
      <ul style={styles.list}>
        <li>
          <span style={ratingStyles[props.game.esrbRating]}>{props.game.esrbRating}</span>
        </li>
        <li>Personal Rating: {props.game.personalRating}</li>
        <li>{`Release Date ${props.game.releaseDate}`}</li>
      </ul>
      {
        props.game.standaloneTitle ? <p>Stand Alone</p> : <div />
      }
    </div>
  )
};

// using styles object
/*
Build two 'classes' for styles, and style the list GamesListItem

Using the style prop, style two tags individualy


*/

export default GamesListItem
