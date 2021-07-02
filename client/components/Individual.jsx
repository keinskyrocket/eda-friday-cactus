import React from 'react'
import ChatBot from 'react-simple-chatbot'
import steps from './chat_dialogue'
import { useParams } from 'react-router-dom'

import { getPersonas } from '../api'

function Individual (props) {
  const { id } = useParams()
  const { personas } = getPersonas

  return (
    <>
      <section className='left-half'>
        <h1>Welcome to Chatbox</h1>
        <ul>
          <li>All we know about {personas.name} from Chatbox</li>
          <li>Picture: {personas.picture}</li>
          <li>Music: {personas.music}</li>
          <li>Nationality: {personas.nationality}</li>
          <li>Food: {personas.food}</li>
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
