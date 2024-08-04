import React from 'react'
import styled from 'styled-components'

import man from '../../assets/images/man.png'
import { FlexWrapper } from '../FlexWrapper'

interface ImageProps {
  src: string
  alt: string
}

export function Main() {
  return (
    <StyledMain>
      <FlexWrapper align='center' justify='space-around'>
        <div>
          <Styledhello>Hi! 👋</Styledhello>
        </div>

        <div>
          <Name>
            I’m Iosi, a product designer from Indonesia. A passionate one in human-centred design.
          </Name>
        </div>
        <div>
          <Man src={man} alt='#' />
        </div>

        <div>
          <Сurrentwork>
            Currently Freelancing for UX, UI, & Web Design Project . Invite me to join your design
            team <a href=' '>pratamaiosi@gmail.com </a>{' '}
          </Сurrentwork>
        </div>
      </FlexWrapper>
    </StyledMain>
  )
}

const Man = styled.img<ImageProps>`
  margin-top: 10px;
  margin-right: 106px;
  margin-bottom: 100px;
  margin-left: 964px;
`
const StyledMain = styled.div`
 
  padding-left: 15px;
  padding-right: 15px;
  margin; 0 auto;
  display: flex;
  align-items: center;
`

const Name = styled.h2`
  display: inline-block;
  weight: 695px;
  height: 225px;
  margin-right: 695px;
  margin-left: 165px;
  letter-spacing: 0.01em;
  color: #0a0a14;
`
const Styledhello = styled.span``

const Сurrentwork = styled.span``
