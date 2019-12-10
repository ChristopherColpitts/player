import React, { Component } from 'react';
import Table from './Table';

export default class Athlete extends Component {

  constructor(props) {
      super(props);
      this.state = {player: []};
    }

    //invoked immediately to load players from api into view
    componentDidMount(){
      fetch("http://localhost/player/index.php/players")
      .then(res => res.json())
      .then(
        result => {
          let tmpArray = [];
          for (var i = 0; i < result.players.length; i++) {
            tmpArray.push(result.players[i]);
          }
          this.setState({
            player: tmpArray
          });
        },
      );
    }
    //map players array to iterate over each players and display info in table
    //retrive table body from table row compenent and insert mapped array to parameters
    table(){
      console.log(this.state.player.players)
      return this.state.player.map(function(object, i){
          return <Table obj={object} key={object} />;
      });
    }

    render() {
      return (
        <div>
          <h2 align="left" style={{ marginTop: 20, marginLeft: 20}}>Athletes</h2>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>LOCATION</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.table() }
            </tbody>
          </table>
        </div>
      );
    }
  }