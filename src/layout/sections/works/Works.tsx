import React from 'react'
import styled from 'styled-components'

import aksestani from './../../../assets/images/aksestani.png'
import arrow3 from './../../../assets/images/arrow3.png'
import arrow4 from './../../../assets/images/arrow4.png'
import calender from './../../../assets/images/calender.png'

interface ImageProps {
  src: string
  alt: string
}

export const Works = () => {
  return (
    <div>
      <StyledWork>
        <Container1>
          <Title1>
            <h3>Kalender Indonesia</h3>
            <p>Redesign Kalender Indonesia Mobile App to serve a new user needs</p>
            <span>
              Read Case Study
              <Arrow3 src={arrow3} alt='arrow3' />
            </span>
          </Title1>

          <Calender src={calender} alt='#' />
        </Container1>

        <Container2>
          <Title2>
            <h3>Aksestani Indonesia</h3>
            <p>Rethinking selling flow on Marketplace Aksestani to help farmer sell easily.</p>
            <span>Read Case Study</span>
            <Arrow4 src={arrow4} alt='arrow4' />
          </Title2>
          <Aksestani src={aksestani} alt='' />
        </Container2>
      </StyledWork>
    </div>
  )
}

const Container2 = styled.div`
  background-color: #d9f6f1;
  width: 502px;
  height: 648px;
  padding-top: 130px;
  padding-left: 40px;
`

const Container1 = styled.div`
  background-color: #ddeefe;
  width: 502px;
  height: 648px;
  padding-top: 130px;
  padding-left: 40px;
`

const Calender = styled.img<ImageProps>`
  width: 422px;
  height: 431px;
  object-fit: cover;
`
const Aksestani = styled.img<ImageProps>`
  width: 422px;
  height: 431px;
  object-fit: cover;
`

const StyledWork = styled.div`
  display: flex;
  gap: 56px;
  padding-top: 100px;
  padding-bottom: 200px;
`

const Arrow3 = styled.img<ImageProps>``
const Arrow4 = styled.img<ImageProps>``

const Title1 = styled.div`
  position: relative;
  bottom: 30px;
`

const Title2 = styled.div`
  position: relative;
  bottom: 30px;
`
