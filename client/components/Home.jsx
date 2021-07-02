import React from 'react'

function Home () {
  return (
    <section>
      <h1>Cactus Chatbox</h1>
      <h2>Jump on a conversation with one of these avatars</h2>
      <main>
        <section className="container">
          <div>
            <img src="/images/avatar-01.svg"/>
          </div>
        </section>
        <section className="container">
          <div>
            <img src="/images/avatar-02.svg"/>
          </div>
        </section>
      </main>
      <h2>Note: This is a work of fiction. Any similarity to actual persons, living or dead, or actual events, is purely coincidental.</h2>
    </section>
  )
}

export default Home
