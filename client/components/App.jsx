import React from 'react'
import ChatBot from 'react-simple-chatbot'
import steps from './chat_dialogue'
// import { ThemeProvider } from 'styled-components'

function App () {
  return (
    <div>
      <h1>Hello World</h1>
      <ChatBot steps={steps} />
    </div>
  )
}
export default App
