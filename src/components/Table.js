import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Table extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
      //pass id from state (from selected player) to api delete end point
        axios.get('http://localhost/player/index.php/players/delete/'+this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err));
    }

    handleOnClick = () => {
      this.delete();
      //re-assign route?
      window.location.assign("/index");
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.age}
          </td>
          <td>
            {this.props.obj.country}
          </td>
          <td>
            {/* pass id to view - to display selected player */}
            <Link to={"/view/"+this.props.obj.id} className="btn btn-primary">View</Link>
          </td>
          <td>
            <button  onClick={() => {
              this.handleOnClick();
            }}
         className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default Table;