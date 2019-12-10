import React, { Component } from 'react';
import axios from 'axios';

export default class View extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      players: []
    }
  }

  delete() {
    axios.get('http://localhost/player/index.php/players/delete/'+this.state.players.id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
  }

  //grab the selected player and mount to state on start up
  //use the sent "id" from Table to display the proper selected player
  componentDidMount() {
      axios.get('http://localhost/player/index.php/players/'+this.props.match.params.id)
          .then(response => {
            console.log(response.data.players_item.name);
              this.setState({ 
                players: response.data.players_item });
          })
          .catch(function (error) {
              console.log(error);
          })
    }
 
  //render player data
  render() {
    return (
        <div>
          <span><h1>{this.state.players.name}</h1></span>
          <table class="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">AGE</th>
              <td>{this.state.players.age}</td>
            </tr>
            <tr>
              <th scope="row">CITY</th>
              <td>{this.state.players.city}</td>
            </tr>
            <tr>
              <th scope="row">PROVINCE</th>
              <td>{this.state.players.province}</td>
            </tr>
            <tr>
              <th scope="row">COUNTRY</th>
              <td>{this.state.players.country}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </div>
    )
  }
}