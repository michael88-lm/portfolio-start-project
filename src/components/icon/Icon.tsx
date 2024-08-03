import React from 'react'

import iconSpite from './../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width='172'
      height='164'
      viewBox='0 0 172 164'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <use xlinkHref={`$(iconsSprite)#${props.iconId}`} />
    </svg>
  )
}
