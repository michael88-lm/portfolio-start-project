import React from 'react'

import sprite from './../../assets/images/sprite.svg'

type IconPropsType = {
  style: { background?: string }
  iconId: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg>
      <svg
        width='146'
        height='146'
        viewBox='0 0 146 146'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      ></svg>
      <use xlinkHref={`$(sprite)#${props.iconId}`} />
    </svg>
  )
}
