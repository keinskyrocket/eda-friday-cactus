import React from 'react'
import ChatBot from 'react-simple-chatbot'
import steps from './chat_dialogue'

function Individual () {
  return (
    <>
      <section className='left-half'>
        <h1>Welcome to Chatbox</h1>
        <ul>
          <li>All we know about Jerry from Chatbox</li>
          <li>Name: Jerry </li>
          <li>Age: 16 </li>
          <li>Siblings: 1</li>
          <li>Frenemy: Tom</li>
          <li>Hobbies: Eating and chilling</li>
          <li>Favourite food: Cheese </li>
          <li>Favourite place to live: Tom&sbquo;s house </li>
        </ul>
      </section>
      <section className='right-half'>
        <div className='outer'>
          <div className='inner'>
            <div className='container'>
              <ChatBot steps={steps} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Individual
