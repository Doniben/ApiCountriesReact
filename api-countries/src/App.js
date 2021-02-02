import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Countries from './components/Countries'
import Country from './components/Country'
import Navbar from './components/Navbar'
import Search from './components/Search'


function App() {
  return (
    <Router>
        <Navbar />
        <Route exact path="/">
          <Search />
          <Countries />
        </Route>
        <Route path="/countries/:name" children={
          <Country />}>
        </Route>
    </Router>
  )
}

export default App;
