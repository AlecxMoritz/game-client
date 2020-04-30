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

const GenreSelect = () => {
  const [genreSelected, setGenreSelected] = useState('');
  return (
    <div>
      <div>
        <p onClick={() => setGenreSelected('Simulation')}>Simulation</p>
        <p onClick={() => setGenreSelected('MMORPG')}>MMORPG</p>
        <p onClick={() => setGenreSelected('RPG')}>RPG</p>
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
