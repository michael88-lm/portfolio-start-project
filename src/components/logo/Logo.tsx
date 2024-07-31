import React from 'react'
import styled from 'styled-components'

interface ImageProps {
  src: string
  alt: string
}

export function Logo() {
  return <Group1 src={Group1} alt='#' />
}

const Group1 = styled.img<ImageProps>``

// export const Ellipse1 = styled.img<ImageProps>`
//   border-radius: 100%;
//   position: absolute;
//   top: -20px;
//   left: 0;
// `

// export const Ellipse23 = styled.img<ImageProps>`
//   border-radius: 100%;
//   fill: #feeae3;
//   position: absolute;
//   left: 10px;
//   top: -10px;
// `
// const Ellipse22 = styled.img<ImageProps>`
//   border-radius: 100%;
//   fill: #f9f7c7;
//   margin-top: 97px;
//   margin-right: 1250px;
//   margin-bottom: 11px;
//   margin-left: 113px;
// `
