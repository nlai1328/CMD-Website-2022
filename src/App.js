import React from 'react';
import Home from './Homepage/Home'
import Rate from './Ratespage/Rates'
import Rules from './Rulespage/Rules'
import Contact from './ContactPage/Contact'
import Proshop from './Proshoppage/Proshop'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App(){
  return(
    <Router>
      <div style={{height:"85vh",margin:"0",padding:"0"}}>
        <Switch>
        <Route path = '/Rates' exact component={Rate}/>
        <Route path = '/Rules' exact component={Rules}/>
        <Route path ='/Contact' exact component={Contact}/>
        <Route path = '/Proshop' exact component={Proshop}/>
        <Route path = '/' exact component={Home}/>
        </Switch>
      </div>
    </Router>
 
  )
}

export default App;
