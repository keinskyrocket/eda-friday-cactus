import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Individual from './Individual'

function App () {
  return (
    <div>
      <Route exact path='/' render={() => < Home/>} />
      <Route exact path='/details' render={() => < Individual/>} />
    </div>
  )
}
export default App
