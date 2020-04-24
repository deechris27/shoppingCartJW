import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import ShopPage from './ShopPage';

const App = () => {
    return (
        <div>
          <h1>Hello World!!!</h1>
          <Router>
            <Switch>
               <Route exact path='/' component={HomePage}/>
               <Route path='/shop' component={ShopPage} />
            </Switch>
          </Router>
        </div>
    )
};

export default App;
