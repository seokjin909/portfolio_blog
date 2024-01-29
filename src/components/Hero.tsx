import React from 'react'

function Hero() {
  return (
    <section className='text-center flex flex-col p-4'>
        <h3 className='font-bold text-3xl mb-2'>Welcome to My Portfoilo</h3>
        <p className='text-sm'>Check out my latest front-end development projects!</p>
        <nav className='flex items-center justify-center gap-4 py-2'>
          <button className='px-5 py-2 bg-yellow-400 rounded-3xl'>Visit Github</button>
          <button className='px-5 py-2 border-2 border-black rounded-3xl'>Contact Me</button>
        </nav>
    </section>
  )
}

export default Hero