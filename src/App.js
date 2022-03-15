import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home';
import Area from './components/pages/Area';
import Contact from './components/pages/Contact';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NotFound from './components/pages/NotFound';
import  Scatter from './components/pages/Scatter';
import  TwoLevelPie from './components/pages/TwoLevelPie';
import Radar from './components/pages/Radar';
import  RadialBar  from './components/pages/RadialBar';
import Treemap from './components/pages/Treemap'
import Tooltip  from './components/pages/Tooltip';
import Legend from './components/pages/Legend';
import Responsive from './components/pages/Responsive'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Area" component={Area}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/Scatter" component={Scatter}/>
          <Route exact path="/TwoLevelPie" component={TwoLevelPie}/>
          <Route exact path="/Radar" component={Radar}/>
          <Route exact path="/RadialBar" component={RadialBar}/>
          <Route exact path="/Treemap" component={Treemap}/>
          <Route exact path="/Tooltip" component={Tooltip}/>
          <Route exact path="/Legend" component={Legend}/>
          <Route exact path="/Responsive" component={Responsive}/>
          <Route  component={NotFound}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
