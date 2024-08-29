import React from 'react'
import styled from 'styled-components'

import { Icon } from '../icon/Icon'

export function Logo() {
  return (
    <>
      {' '}
      <div style={{ backgroundColor: 'url(#pattern0_27_2600)' }}>
        <Icon
          iconId='circle-a'
          style={{
            background: undefined,
          }}
        />
      </div>
      <div style={{ backgroundColor: '#FEEAE3' }}>
        <Icon
          iconId='circle-a1'
          style={{
            background: undefined,
          }}
        />
      </div>
      <div style={{ backgroundColor: '#F9F7C7' }}>
        <Icon
          iconId='circle-a2'
          style={{
            background: undefined,
          }}
        />
      </div>{' '}
    </>
  )
}
