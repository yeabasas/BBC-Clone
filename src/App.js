
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home';
import News from './pages/News';
import Signin from './signin/Signin';
import Admin from './pages/Admin';
import React from "react";
import AddNews from './pages/AddNews'
import DashBoard from './pages/DashBoard';
import Login from './signin/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path={"/"}>
              <Home/>
            </Route>
            <Route path="/News">
              <News/>
            </Route>
            <Route path="/Signin">
              <Signin/>
            </Route>
            <Route exact path="/Admin" component={Admin}>
              <Admin/>
            </Route>
            <Route exact path="/AddNews" component={Admin}>
              <AddNews/>
            </Route>
            <Route exact path="/DashBoard" component={Admin}>
              <DashBoard/>
            </Route>
            <Route exact path="/Login" >
              <Login/>
            </Route>
        
          </Switch>

        </div>
      </div>
    </Router>
    
  );
} 

export default App;
