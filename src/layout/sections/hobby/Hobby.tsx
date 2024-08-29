import React from 'react'
import styled from 'styled-components'

import arrow from './../../../assets/images/arrow-right.png'
import typewriter from './../../../assets/images/typewriter.png'

interface ImageProps {
  src: string
  alt: string
}

export const Hobby = () => {
  return (
    <StyledHobby>
      <h2>Activities on Spare Time</h2>
      <h3>Writing</h3>
      <h4 id='one-part'>Medium</h4>
      <p>
        I like to think and write about UX Design on Medium. I also plan to upload designs from my
        personal project there too.
      </p>
      <Typewriter src={typewriter} alt='typewriter' />

      <b>Tulisan pilihan</b>
      <ul>
        <li>Mengenal UX Design dan Berkarir sebagai UX Designer</li>
        <li>Product Design Sprint 101 - Bahasa Indonesia</li>
        <li>Cerita Abunawas & Cara Startup Jaman Now Melakukan UX Research</li>
      </ul>
      <span>
        Read My Medium
        <a href='#'>
          <img src='#' alt='arrow-right' />
        </a>
      </span>
      <h5 id='second-part'>Personal Blog</h5>
      <img src='#' alt='Ellipse(3)' />
      <img src='' alt='Ellipse 2.1' />
      <p>
        I usually write about my thoughts, a unique perspective, and personal journal on my personal
        blog
      </p>
      <span>
        Curious? Read on this <Arrow src={arrow} alt='arrow' />
      </span>
    </StyledHobby>
  )
}

export const StyledHobby = styled.section``

const Arrow = styled.img<ImageProps>``

const Typewriter = styled.img<ImageProps>`
  box-shadow: 10px 16px 0px rgb(#b21aa1, #e92577, #e92577);
`
