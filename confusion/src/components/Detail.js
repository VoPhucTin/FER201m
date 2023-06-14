import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../share/ListOfPlayers";
import { Button, Icon } from "react-materialize";
import ModalCase from "./ModalCase";
const Detail = () =>{
    const userName = useParams();
  const player = data.find(obj => {
    return obj.id == userName.id;
  });
   let cost = player.cost.toLocaleString();
   const [isOpen, setIsOpen] = useState(false);
   
   return(
    <div className='container'>
      {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
     <div className='product-card'>
    	{/* <div className='badge'>{player.name}</div> */}
    	<div className='product-tumb'>
    		<img src={`../${player.img}`} alt=''/>
        <Button className="button-overlay red"
        floating
        icon={<Icon>live_tv</Icon>}
        small
        node="button"
        waves="light"
        // fab
        href=''
        onClick={() => setIsOpen(true)}
        />

    	</div>
      {/* <ModalCase player={player}/> */}
    	<div className='product-details'>
        	<h4>{player.club}</h4>
      		<div className='product-price'>Market value: € {cost}</div>
      		<p>{player.info}</p>
      		<div className='product-bottom-details'></div>
    	</div>
  </div>
</div>
   )

}

export default Detail;