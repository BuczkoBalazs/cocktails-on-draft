import React from 'react'
import Header from './Header'

function Layout({ children }) {
  return (
    <main className='main-container'>
      <Header />
        <section className='content-wrapper'>
          {children}
        </section>
    </main>
  )
}

export default Layout