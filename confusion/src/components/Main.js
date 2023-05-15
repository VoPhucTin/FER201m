import React, { Component } from 'react'
import { PlayerList } from '../share/ListOfPlayers';
import PlayersPresentation from './Players';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           players: PlayerList
        };
     }
  render() {
    return <PlayersPresentation players={this.state.players}/>
  }
}
export default Main