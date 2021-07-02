import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { steps, theme } from './chat_dialogue'
import { ThemeProvider } from 'styled-components'
import { Route } from 'react-router-dom'

import Home from './Home'
import Individual from './Individual'

function App () {
  return (
    <div>
      <Route exact path='/' render={() => < Home/>} />
      <Route exact path='/profile' render={() => < Individual/>} />
    </div>
  )
}
export default App
