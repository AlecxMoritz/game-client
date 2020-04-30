import React from 'react';
import GamesListItem from './GamesListItem';

// prop titled 'games'

// for every game games - one GamesListItem

const GamesList = (props) => {
  return (
    <div>
      {
        props.games.map(game => {
          return (
            <GamesListItem />
          )
        })
      }
    </div>
  )
}

export default GamesList;
