import React from 'react'
import ChatBot from 'react-simple-chatbot'
import steps from './chat_dialogue'

function Individual () {
  return (
    <>
      <section className='left-half'>
        <h1>Persona</h1>
        <div className=''>
          <h3>
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
          </h3>
        </div>
      </section>
      <section className='right-half'>
        <div className='outer'>
          <div className='inner'>
            <ChatBot steps={steps} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Individual
