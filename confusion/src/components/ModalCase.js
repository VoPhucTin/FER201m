import { height } from '@mui/system'
import React from 'react'
import { Button } from 'react-materialize'

function ModalCase({setIsOpen, player} ) {
  return (
    <div>
        <div className='modal-show' style={{height: '100%', width:'75%', position: 'fixed'}} onClick={()=> setIsOpen(false)}>
            <div id='modal1' className='modal' style={{display:'block', top:'35%'}}>
                <div className='modal-content'>
                    <h4>Video for {player.name}</h4>
                    <p><iframe width='100%' height='400px' src={player.clip} title={player.name} 
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe></p>
                </div>
                <div className='modal-footer'>
                    <Button className='modal-close red-text' node='button' style={{marginRight: '5px'}}>Close</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalCase