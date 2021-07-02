import React from 'react'
import { Link } from 'react-router-dom'

function Home (props) {
  const { personas } = props

  return (
    <section>
      <h1>This is Home</h1>
      <main>
        <section className="container">
          <>
            <ul>
              {personas.map(persona => (
                <li key={persona.name}>
                  <Link to={`/personas/${persona.name}`}>{persona.name}</Link>
                </li>
              ))}
            </ul>
          </>
        </section>
      </main>
    </section>
  )
}

export default Home
