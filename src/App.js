import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from "./components/header"
import Main from './main'
import Landing from './components/landing'
import UpdateForm from './components/updatevarietalform'
import AddForm from './components/addvarietalform'
import NewRegion from './components/newRegion'

class App extends Component {
    render() {
        return (
          <div className="App">
            <BrowserRouter>
              <div>
                <Header />
                <Switch>
              <main>
                <Route exact path='/' component={() => <Landing />} />
                <Route exact path='/main' component={() => <Main />} />
                <Route exact path='/update' component={() => <UpdateForm />} />
                <Route exact path='/addVarietal' component={() => <AddForm />} />
                <Route exact path='/newRegion' component={() => <NewRegion />} />
              </main>
            </Switch>
                </div>
            </BrowserRouter>
            </div>
            )
            }
}

export default App;