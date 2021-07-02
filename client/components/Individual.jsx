import React from 'react'
import { useParams } from 'react-router-dom'

import ChatBot from 'react-simple-chatbot'
import { steps, theme } from './chat_dialogue'
import { ThemeProvider } from 'styled-components'

function Individual (props) {
  const { name } = useParams()
  const { personas } = props

  const myArr = personas.map(element => element)
  const myItem = myArr.find(item => item.name === name)

  return (
    <>
      <section className='left-half'>
        <h1>{myItem.name}</h1>
        <div className=''>
          <h3>
            <div className='image-center'>
              <img className ='sm-image' src={myItem.picture} />
            </div>
            <ul>
              <li>All we know about {myItem.name} from Chatbox</li>
              <li>Music: {myItem.music}</li>
              <li>Nationality: {myItem.nationality}</li>
              <li>Food: {myItem.food}</li>
            </ul>
          </h3>
        </div>

      </section>
      <section className='right-half'>
        <div className='outer'>
          <div className='inner'>
            <div>
              <ThemeProvider theme={theme}>
                <ChatBot steps={steps} />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Individual
