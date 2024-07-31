import React from 'react'
import styled from 'styled-components'

export const Hobby = () => {
  return (
    <StyledHobby>
      <h3>Activities on Spare Time</h3>
      <h4>Writing</h4>
      <h5 id='one-part'>Medium</h5>
      <p>
        I like to think and write about UX Design on Medium. I also plan to upload designs from my
        personal project there too.
      </p>
      <b>Tulisan pilihan</b>
      <ul>
        <li>Mengenal UX Design dan Berkarir sebagai UX Designer</li>
        <li>Product Design Sprint 101 - Bahasa Indonesia</li>
        <li>Cerita Abunawas & Cara Startup Jaman Now Melakukan UX Research</li>
      </ul>
      <span>
        Read My Medium{' '}
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
        Curious? Read on this{' '}
        <a href='#'>
          <img src='#' alt='arrow-right' />
        </a>
      </span>
      <img src='#' alt='Ellipse(4)' />
      <img src='' alt='Ellipse 2.2' />
    </StyledHobby>
  )
}

const StyledHobby = styled.section``
