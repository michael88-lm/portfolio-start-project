import React from 'react'
import styled from 'styled-components'

import cursor from '../../../assets/images/cursor.png'

interface ImageProps {
  src: string
  alt: string
}

export const Slogan = () => {
  return (
    <StyledSlogan>
      <h2>Let’s work together on your next product.</h2>
      <span>
        <Cursor src={cursor} alt='#' />
      </span>
      <a href=' '>pratamaiosi@gmail.com</a>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.div`
  justify-content: center;
  padding-left: 165px;
  padding-right: 735px;
  padding-top: 40px;
  padding-bottom: 84px;
`

const Cursor = styled.span<ImageProps>``
