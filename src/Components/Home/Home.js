import React, { useEffect, useState } from 'react';
import Explanation from './Explanation';
import GenreSelect from './GenreSelect';
import GamesList from '../Games/GamesList';

// build a way to get data on load

// pass off the data to <GamesList />

const Home = (props) => {
  const explanationText = "Brain is the seed of intelligence inconspicuous motes of rock and gas Sea of Tranquility as a patch of light cosmic ocean two ghostly white figures in coveralls and helmets are soflty dancing. Not a sunrise but a galaxyrise the sky calls to us tendrils of gossamer clouds the only home we've ever known preserve and cherish that pale blue dot something incredible is waiting to be known and billions upon billions upon billions upon billions upon billions upon billions upon billions.";
  const [games, setGames] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3001/games/all';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization': props.tokenProp,
      }
    })
    .then(data => data.json())
    .then(gamesData => setGames(gamesData))
    .catch(err => console.warn(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>Home</p>
      <Explanation text={explanationText} />
      <GenreSelect />
      <GamesList games={games} />
    </div>
  )
};


// GameList
// GameListItem

export default Home;
