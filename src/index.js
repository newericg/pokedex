import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import PokePages from './components/PokePages'


ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/:id" exact={true} render={(props) => <PokePages {...props} pokemon={props} />}/>
        </Switch>
    </ BrowserRouter>
, document.getElementById('root'));


