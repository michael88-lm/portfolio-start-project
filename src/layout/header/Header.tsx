import React from 'react'
import styled from 'styled-components'

// import { FlexWrapper } from '../../components/FlexWrapper'
import { Container } from '../../components/container'
import { Hero } from '../../components/hero/Hero'
import { Iosi } from '../../components/iosi/Iosi'
import { Logo } from '../../components/logo/Logo'
// import { Ellipse1, Logo } from '../../components/logo/Logo'
import { Work } from '../../components/work/Work'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Iosi />
        <Hero />
        <Work />
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header``
