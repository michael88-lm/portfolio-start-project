import React from 'react'
import styled from 'styled-components'

import mockup from '../../../assets/images/mockup.png'

interface ImageProps {
  src: string
  alt: string
}

export const Lastworks = () => {
  return (
    <Styledbox>
      <h2>my last freelance works</h2>
      <Item1>
        <Mockup src={mockup} alt='#' />
      </Item1>

      <Item2>
        <h3>Mr Biller - Startup</h3>
        <p>
          Redesign Mr Biller Landing Page become more fresh and could respresent their business
          better.
        </p>
        <span>Client from 🇦🇺</span>
        <a href='#'>
          <span>Check on live</span>
        </a>
      </Item2>
    </Styledbox>
  )
}

const Mockup = styled.img<ImageProps>``

const Styledbox = styled.div`
  display: flex;
  justify-content: center;
   margin; 0 auto;
  display: flex;
  align-items: center;
  gap=60px
`
const Item1 = styled.div`
  display: flex;
  justify-content: center;
`
const Item2 = styled.div`

width = 469px;
hight = 229px;


`
