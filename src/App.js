import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Setup from './Setup'
import Game from './Game'



class App extends Component {
  constructor() {
    super()
  
    this.state = {
      hasStarted: false,
      name: '',
      difficulty: ''
    }
    this.setupGame = this.setupGame.bind(this)
  }

  setupGame (name, difficulty) {
    
    this.setState({
      name,
      difficulty,
      hasStarted: true
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            // Component={Setup}
            render={ () => <Setup onSubmit={this.setupGame}/>}
          />
          <Route 
            exact
            path = '/game'
            render={({history}) => (
              <Game
                hasStarted = {this.state.hasStarted}
                history={history}
              />
            )}
          />
          <Route 
            render={() => <p>404 Page Not Found</p>}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
