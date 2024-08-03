import React from 'react'
import styled from 'styled-components'

import { FlexWrapper } from '../../components/FlexWrapper'
import { Container } from '../../components/container'
import { Iosi } from '../../components/iosi/Iosi'
import { Logo } from '../../components/logo/Logo'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <FlexWrapper />
        <Iosi />
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header``
