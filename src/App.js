import React from 'react'
import './css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarContainer from './containers/NavbarContainer';

function App() {
  return (
    <Router>
      <NavbarContainer />
        <div className="App">
        </div>
    </Router>
  );
}

export default App;
