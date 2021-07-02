import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { steps, theme } from './chat_dialogue'
import { ThemeProvider } from 'styled-components'

function App () {
  return (
    <div>
      <h1>Hello World</h1>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />;
      </ThemeProvider>
    </div>
  )
}
export default App
