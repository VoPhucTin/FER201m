import React from 'react'
import { PlayerList } from '../share/ListOfPlayers';

const PlayersPresentation = () => {
  return (
    <div className='container'>
      {PlayerList.map((player)=>(
        <div className='column'>
        <div className='card'>
            <img src={player.img}/>
            <h3>{player.name}</h3>
            <h4 className='title'>{player.club}</h4>
            <p><button>Detail</button></p>
        </div>
        </div>
      ))}
        
        
    </div>
  )
}

export default PlayersPresentation;