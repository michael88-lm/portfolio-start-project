import React from 'react'
import styled from 'styled-components'

import { FlexWrapper } from '../../components/FlexWrapper'
import { Container } from '../../components/container'
// import { Logo } from '../../components/logo/Logo'
import { Main } from '../../components/main/Main'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        {/* <Logo /> */}
        <FlexWrapper />
        <Main />
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header``
