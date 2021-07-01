import React from 'react'
import ChatBot from 'react-simple-chatbot'
import steps from '../chat_dialogue'

function App () {
  return (
    <div>
      <h1>Team Cactus</h1>
      <ChatBot
        steps={steps}
      />

    </div>
  )
}
export default App
