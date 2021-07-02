import React from 'react'
import { Link } from 'react-router-dom'

function Home (props) {
  const { personas } = props

  return (
    <section>
      <h1>Cactus Chatbox</h1>
      <h2>Jump on a conversation with one of these avatars</h2>
      <main>
        <section className="container">
          <>
              {personas.map(persona => (
                <article key={persona.name}>
                  <img src="/images/avatar-01.svg" />
                  <Link to={`/personas/${persona.name}`}>{persona.name}</Link>
                </article>
              ))}        
          </>
        </section>
      </main>
      <h2>Note: This is a work of fiction. Any similarity to actual persons, living or dead, or actual events, is purely coincidental.</h2>
    </section>
  )
}

export default Home
