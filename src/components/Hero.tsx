import Image from 'next/image'
import React from 'react'
import Profile from "../../public/images/profile.png"

function Hero() {
  return (
    <section className='text-center'>
        <article>
        <h3>Welcome to My Portfoilo</h3>
        <p>Check out my latest front-end development projects!</p>
        </article>
        <article className='flex items-center'>
                <Image src={Profile} alt='프로필 이미지' priority/>
                <div>
                    <h6>Seokjin</h6>
                    <p>Front-end Developer</p>
                    <p>안녕하세요 미디어디자인 전공자 프론트엔드 개발자 소석진입니다.</p>
                </div>
        </article>
    </section>
  )
}

export default Hero