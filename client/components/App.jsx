import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Individual from './Individual'

// import { ThemeProvider } from 'styled-components'

function App () {
  return (
    <div>
      <Route exact path='/' render={() => < Home/>} />
      <Route exact path='/profile' render={() => < Individual/>} />
    </div>
  )
}
export default App
