import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from './component/Header'
import OutputMenu from './component/menuList/OutputMenu'
import Details from './component/details/Details'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={OutputMenu} />
            <Route exact path="/:id" component={Details} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App