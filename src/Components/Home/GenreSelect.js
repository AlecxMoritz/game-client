import React, { useState } from 'react';

const gameData = [
  {
    id: 1,
    genre: 'Simulation',
    title: 'Stardew Valley'
  },
  {
    id: 2,
    genre: 'MMORPG',
    title: 'RuneScape'
  },
  {
    id: 2,
    genre: 'Simulation',
    title: 'Animal Crossing: New Horizons'
  },
  {
    id: 4,
    genre: 'RPG',
    title: 'Skyrim'
  },
];

// Data
// mock data - genres & titles
// state value - for genre selected

const styles = {
  container: {
    marginTop: '1em'
  },
  span: {
    margin: '0 1em',
  }
}

const GenreSelect = () => {
  const [genreSelected, setGenreSelected] = useState('');
  return (
    <div style={styles.container}>
      <div>
        <span style={styles.span} onClick={() => setGenreSelected('Simulation')}>Simulation</span>
        <span style={styles.span} onClick={() => setGenreSelected('MMORPG')}>MMORPG</span>
        <span style={styles.span} onClick={() => setGenreSelected('RPG')}>RPG</span>
      </div>
      <div>
      {
        gameData.filter(game => game.genre === genreSelected).map(matchedGame => {
          return (
            <div key={matchedGame.id}>
              <h3>{matchedGame.title}</h3>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default GenreSelect;
