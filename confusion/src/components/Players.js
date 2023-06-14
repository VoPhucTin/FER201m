import React, { useState } from 'react'
import { data } from '../share/ListOfPlayers';
import { Link } from 'react-router-dom';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
import Button from '@mui/material/Button'
const PlayersPresentation = () => {
  const [player, setPlayer] = useState([])
  return (
  
    <Container>
	<Row>
  {data.map((player) => (
      <Col className="col s4" key={player.id}>
        <Card>
        <img src={player.img}/>
             <h3>{player.name}</h3>
             <h4 className='title'>{player.club}</h4>
             <Button variant="text" color="primary">
             <Link to={`Detail/${player.id}`}>Detail</Link> 
             </Button>
    {/* <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div> */}
        </Card>
        
      </Col>
    ))}
</Row>
</Container>
  )
}

export default PlayersPresentation;