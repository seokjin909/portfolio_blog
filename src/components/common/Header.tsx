import React from 'react'

function Header() {
  return (
    <header>
      <section className='flex items-center justify-between p-4'>
      <h1 className='font-bold text-3xl'>Seokjin_Blog</h1>
      <nav className='flex flex-row items-center gap-4 text-2xl'>
        <p>Home</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
      </nav>
      </section>  
    </header>
  )
}

export default Header