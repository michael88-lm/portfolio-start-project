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
        <Cursor src={cursor} alt='#' />{' '}
      </span>
      <a href='mailto:pratamaiosi@gmail.com'></a>
    </StyledSlogan>
  )
}

const StyledSlogan = styled.div``

const Cursor = styled.span<ImageProps>``
