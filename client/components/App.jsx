import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Individual from './Individual'

import { getPersonas } from '../api'

// import { ThemeProvider } from 'styled-components'

function App () {
  const { personas } = getPersonas

  return (
    <div>
      <Route exact path='/' render={() => <Home personas={personas} />} />
      <Route exact path='/profile/:id' render={() => <Individual personas={personas} />} />
    </div>
  )
}
export default App
