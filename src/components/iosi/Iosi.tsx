import React from 'react'
import styled from 'styled-components'

import man from '../../assets/images/man.png'
import { FlexWrapper } from '../FlexWrapper'

interface ImageProps {
  src: string
  alt: string
}

export function Iosi() {
  return (
    <div>
      <FlexWrapper align='center' justify='space-around'>
        <div>
          <span>Hi! 👋</span>
          <h2>
            I’m Iosi, a product designer from Indonesia. A passionate one in human-centred design.
          </h2>
        </div>
        <div className='myHero'>
          <Man src={man} alt='#' />
        </div>

        <div>
          <span>
            Currently Freelancing for UX, UI, & Web Design Project . Invite me to join your design
            team <a href=' '>pratamaiosi@gmail.com </a>{' '}
          </span>
        </div>
      </FlexWrapper>
    </div>
  )
}

const Man = styled.img<ImageProps>`
  margin-top: 10px;
  margin-right: 106px;
  margin-bottom: 100px;
  margin-left: 964px;
`
