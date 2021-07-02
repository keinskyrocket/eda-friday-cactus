import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Individual from './Individual'

import { getPersonas } from '../api'

function App () {
  const [personas, setPersonas] = useState([])

  useEffect(() => {
    getPersonas()
      .then(myPersona => {
        setPersonas(myPersona)
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <Route exact path='/' render={() => <Home personas={personas} />} />
      <Route exact path='/personas/:name' render={() => <Individual personas={personas} />} />
    </div>
  )
}
export default App
