import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a href='mailto:@iosipratama'></a>
        </li>
        <li>
          <a href=' '> Have a nice day 😘</a>
        </li>
        <li>
          <a href=' '>Dribbble </a>
        </li>
        <li>
          <a href=' '> Personal Blog</a>
        </li>
        <li>
          <a href=' '> Personal Blog</a>
        </li>
        <li>
          <a href=' '>Behance</a>
        </li>
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
    text-decoration: none;
  }
`
