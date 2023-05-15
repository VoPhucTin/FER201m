import React, { useState } from 'react'
import { PlayerList } from '../share/ListOfPlayers';

const PlayersPresentation = () => {
  const [player, setPlayer] = useState([])
  return (
    <div className='container'>
      {PlayerList.map((player)=>(
        <div className='column'>
        <div className='card'>
            <img src={player.img}/>
            <h3>{player.name}</h3>
            <h4 className='title'>{player.club}</h4>
            
              <a onClick={()=>{setPlayer(player)}} href='#popup1' id='openPopUp'> <span>Detail</span></a>
               

        </div>
        </div>
      ))}
        <div id='popup1' className='overlay'>
          <div className='popup'>
          <img src={player.img}/>
            <h3>{player.name}</h3>
            <a className='close' href='#'>&times;</a>
            <h4 className='content'>{player.info}</h4>
          </div>
        </div>
        
    </div>
  )
}

export default PlayersPresentation;