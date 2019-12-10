import React, { Component } from 'react';
import axios from 'axios';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  //when file is selected grab the event and store the file selected in state
  onChangeHandler = event => {
  var files = event.target.files;
  this.setState({
    selectedFile: files,
    loaded: 0
  });
};
 
  //when upload is clicked iterate over the files to append to data (FormData object)
  //the form data object will be sent via post to backend api to handle the data
  onClickHandler = () => {
      const data = new FormData();
      for (var x = 0; x < this.state.selectedFile.length; x++) {
        data.append("file", this.state.selectedFile[x]);
        for (var key of data.entries()) {
          console.log(key[0] + ", " + key[1]);
        }
      }
      axios.post("http://localhost/player/index.php/players/create", data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          });
        }
      });
    };
 

  //render file selector and uploader 
  render() {
    return (
      <div class="container">
      <div class="row">
        <div class="offset-md-3 col-md-6">
          <div class="form-group files">
            <label>Upload Your File </label>
            <input
              type="file"
              class="form-control"
              multiple
              onChange={this.onChangeHandler}
            />
          </div>
          <button
            type="button"
            class="btn btn-success btn-block"
            onClick={this.onClickHandler}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
    )
  }
}