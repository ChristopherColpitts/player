import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";

//import compenents for routing
import Upload from './components/upload.component';
import View from './components/view.component';
import Athlete from './components/athlete.component';


//set up App for navigation
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="banner"></div>
          <div className="contrainer-main">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <h3><Link to={'/athlete'} className="nav-link">Athletes</Link></h3>
                </li>
                <li className="nav-item">
                  <h3><Link to={'/upload'} className="nav-link">Upload</Link></h3>
                </li>
              </ul>
            </div>
          </nav>
          </div>
          {/* Routes */}
          <Switch>
              {/* Redirect landing page to athelete view */}
              <Route exact path='/' component={ Athlete } />
              <Route exact path='/upload' component={ Upload } />
              <Route path='/view/:id' component={ View } />
              <Route path='/athlete' component={ Athlete } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
