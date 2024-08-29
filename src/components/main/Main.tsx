import React from 'react'
import styled from 'styled-components'

import man from '../../assets/images/man.png'

// import { FlexWrapper } from '../FlexWrapper'

interface ImageProps {
  src: string
  alt: string
}

export function Main() {
  return (
    <StyledMain>
      {/* <FlexWrapper align='center' justify='space-around'> */}
      <div>
        <Styledhello>Hi! 👋</Styledhello>

        <Name>
          I’m Iosi, a product designer from Indonesia. A passionate one in human-centred design.
        </Name>

        <Сurrentwork>
          Currently Freelancing for UX, UI, & Web Design Project . Invite me to join your design
          team <a href=' '>pratamaiosi@gmail.com </a>{' '}
        </Сurrentwork>
      </div>
      <div>
        <Man src={man} alt='#' />
      </div>
      {/* </FlexWrapper> */}
    </StyledMain>
  )
}

const Man = styled.img<ImageProps>``

const StyledMain = styled.div`
  justify-content: center;
  padding-left: 165px;
  padding-right: 186px;
  padding-top: 52px;
  padding-bottom: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  column-gap: 104px;
`

const Name = styled.h2`
  margin-bottom: 49px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 50px;
  line-height: 150%;
  letter-spacing: 0.01em;
  color: #0a0a14;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`
const Styledhello = styled.span``

const Сurrentwork = styled.span`
  weight: 504px;
`
