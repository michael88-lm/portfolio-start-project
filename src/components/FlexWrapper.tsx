import styled from 'styled-components'

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  children?: React.ReactNode
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: row;
    flex-direction: ${(props) => props.direction || 'row'}
    justify-content: ${(props) => props.justify || 'stretch'}
    flex-wrap: ${(props) => props.wrap || 'nowrap'}
    

`
