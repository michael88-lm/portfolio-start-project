import React from 'react'
import styled from 'styled-components'

import man from '../../assets/images/man.svg'

interface ImageProps {
  src: string
  alt: string
}

export function Hero() {
  return (
    <div className='myHero'>
      <Man src={man} alt='#' />
    </div>
  )
}

const Man = styled.img<ImageProps>`
  margin-top: 10px;
  margin-right: 106px;
  margin-bottom: 100px;
  margin-left: 964px;
`
