import React from 'react';
import GamesListItem from './GamesListItem';

// prop titled 'games'

// for every game games - one GamesListItem

const GamesList = (props) => {
  // console.log(props.games);
  return (
    <div>
      {
        props.games.map(game => {
          console.log(game);
          return (
            <GamesListItem game={game} />
          )
        })
      }
    </div>
  )
}

export default GamesList;
