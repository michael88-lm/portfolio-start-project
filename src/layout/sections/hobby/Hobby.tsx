import React from 'react'
import styled from 'styled-components'

import arrow1 from './../../../assets/images/arrow1.png'
import arrow from './../../../assets/images/arrow-right.png'
import typewriter from './../../../assets/images/typewriter.png'

interface ImageProps {
  src: string
  alt: string
}

export const Hobby = () => {
  return (
    <StyledHobby>
      <HobbyTitle2>Activities on Spare Time</HobbyTitle2>
      <HobbyTitle3>Writing</HobbyTitle3>
      <HobbyTitle4>Medium</HobbyTitle4>
      <HobbyText>
        I like to think and write about UX Design on Medium. I also plan to upload designs from my
        personal project there too.
      </HobbyText>

      <Typewriter src={typewriter} alt='typewriter' />

      <Name>Tulisan pilihan</Name>
      <Checklist>
        <li>Mengenal UX Design dan Berkarir sebagai UX Designer</li>
        <li>Product Design Sprint 101 - Bahasa Indonesia</li>
        <li>Cerita Abunawas & Cara Startup Jaman Now Melakukan UX Research</li>
      </Checklist>
      <Item>
        Read My Medium
        <a href='#'>
          <Arrow1 src={arrow1} alt='arrow1' />
        </a>
      </Item>

      <StyledBlog>
        <h3>Personal Blog</h3>
        <p>
          I usually write about my thoughts, a unique perspective, and personal journal on my
          personal blog
        </p>
        <span>
          Curious? Read on this <Arrow src={arrow} alt='arrow' />
        </span>
      </StyledBlog>
    </StyledHobby>
  )
}

export const StyledHobby = styled.section``

const Arrow = styled.img<ImageProps>``
const Arrow1 = styled.img<ImageProps>``

const Typewriter = styled.img<ImageProps>`
  box-shadow: -10px 16px 0px;
`
const HobbyTitle2 = styled.h2`
  padding-left: 165px;
  margin-bottom: 20px;
`
const HobbyTitle3 = styled.h3`
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  color: #000;
  padding-left: 165px;
  margin-bottom: 20px;
`
const HobbyTitle4 = styled.h4`
  font-family: var(--second-family);
  font-weight: 700;
  font-size: 29px;
  letter-spacing: 0.05em;
  color: #000;
  padding-left: 387px;
  margin-bottom: 10px;
`
const HobbyText = styled.p`
  color: #0a0a14;
  width: 490px;
  height: 44px;
  padding-left: 387px;
  display: inline;
`
const Checklist = styled.ul`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: #0a0a14;
  padding-left: 406px;
`
const Name = styled.b`
  padding-left: 406px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7d7d8d;
`
const Item = styled.span`
  width: 150px;
  height: 24px;
  padding-left: 387px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.05em;
  color: #000;
`
// const Blog = styled.h3`
//   padding-left: 555px;
//   font-family: var(--second-family);
//   font-weight: 700;
//   font-size: 29px;
//   letter-spacing: 0.05em;
//   color: #000;
// `

const StyledBlog = styled.div`
  padding-left: 555px;
`
