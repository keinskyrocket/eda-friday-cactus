import React from 'react'
import { useParams } from 'react-router-dom'

function Individual (props) {
  const { name } = useParams()
  const { personas } = props

  const myArr = personas.map(element => element)
  const myItem = myArr.find(item => item.name === name)

  return (
    <>
      <section className='left-half'>
        <h1>Welcome to Chatbox</h1>
        <ul>
          <li>All we know about {myItem.name} from Chatbox</li>
          <li>Picture: {myItem.picture}</li>
          <li>Music: {myItem.music}</li>
          <li>Nationality: {myItem.nationality}</li>
          <li>Food: {myItem.food}</li>
        </ul>
      </section>
      <section className='right-half'>
        <div className='outer'>
          <div className='inner'>
            <div className='container'>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Individual
