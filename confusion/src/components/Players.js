import React, { useState } from 'react'
import { data } from '../share/ListOfPlayers';
import { Link } from 'react-router-dom';
const PlayersPresentation = () => {
  const [player, setPlayer] = useState([])
  return (
    <div className='container'>
      {data.map((player)=>(
        <div className='column'>
        <div className='card'>
            <img src={player.img}/>
            <h3>{player.name}</h3>
            <h4 className='title'>{player.club}</h4>
            <Link to={`Detail/${player.id}`}>
              {/* <a onClick={()=>{setPlayer(player)}} href='#popup1' id='openPopUp'> <span>Detail</span></a> */}
              <a><span>Detail</span></a>
              </Link> 

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