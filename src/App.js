import React from 'react'
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
import NavbarContainer from './Navbar/NavbarContainer';
import HomeContainer from './Home/HomeContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarContainer />
        <HomeContainer />
      </div>
    </Router>
  );
}

export default App;
