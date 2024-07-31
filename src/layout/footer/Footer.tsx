import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a href='mailto:@iosipratama'></a>
        </li>
        <li>Have a nice day 😘</li>
        <li>Dribbble</li>
        <li>Personal Blog</li>
        <li>Medium</li>
        <li>Behance</li>
        <li>
          <a href='https://www.linkedin.com/' target='blank'></a>
        </li>
      </ul>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  ul {
    display: flex;
    gap: 70px;
    list-style: none;
  }
`
