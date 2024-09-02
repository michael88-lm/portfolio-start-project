import React from 'react'
import styled from 'styled-components'

import mockup from '../../../assets/images/mockup.png'
import { FlexWrapper } from '../../../components/FlexWrapper'
import arrow1 from './../../../assets/images/arrow1.png'

interface ImageProps {
  src: string
  alt: string
}

export const Lastworks = () => {
  return (
    <Styledbox>
      <div className='container'>
        <Title>my last freelance works</Title>
      </div>
      <FlexWrapper>
        <Item1>
          <Mockup src={mockup} alt='#' />
        </Item1>

        <Item2>
          <h3>Mr Biller - Startup</h3>
          <p>
            Redesign Mr Biller Landing Page become more fresh and could respresent their business
            better.
          </p>
          <span>Client from </span> <br />
          <a href='#'>
            <span>
              Check on live <Arrow1 src={arrow1} alt='arrow1' />
            </span>
          </a>
        </Item2>
      </FlexWrapper>
    </Styledbox>
  )
}

const Mockup = styled.img<ImageProps>``
const Arrow1 = styled.img<ImageProps>``

const Styledbox = styled.div`
  flex-direction: column;
  justify-content: center;
  margin-bottom: 200px;
  gap: 20px;
  text-align: left;
`
const Item1 = styled.div`
  display: flex;
  justify-content: center;
`
const Item2 = styled.div`
  width: 469px;
  height: 229px;
  position: relative;
  right: 80px;
  top: 100px;
  background-color: white;
`
const Title = styled.h2`
  justify-content: flex-start;
  align-items: center;
`
