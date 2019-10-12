import React, { Component } from 'react'
// import Header from '../Layouts/Header'
import Navigation from '../Layouts/Navigation'
import AboutContainer from '../../containers/AboutContainer'
// import Typography from '@material-ui/core/Typography'

import LandingContainer from '../../containers/LandingContainer'

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Typography><Header title="Ghana Design Studio" /></Typography> */}
        <Switch>
          <Route path="/"><LandingContainer /></Route>
          <Route path="/"><AboutContainer /></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
