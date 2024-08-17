import React from 'react'
import styled from 'styled-components'

import mockup from '../../../assets/images/mockup.png'
import rectleft from '../../../assets/images/rectleft.png'
import rectright from '../../../assets/images/rectright.png'
import aksestani from './../../../assets/images/aksestani.webp'
import photo from './../../../assets/images/photo.png'

interface ImageProps {
  src: string
  alt: string
}

export const Works = () => {
  return (
    <div className='container'>
      <div className='boxs'>
        <div className='box-a'>
          <h3>Kalender Indonesia</h3>
          <p>Redesign Kalender Indonesia Mobile App to serve a new user needs</p>
          <span>Read Case Study</span>
          <Rectleft src={rectleft} alt='#' />
          <Photo src={photo} alt='#' />
        </div>

        <div className='box-a'>
          <h3>Aksestani Indonesia</h3>
          <p>Rethinking selling flow on Marketplace Aksestani to help farmer sell easily.</p>
          <span>Read Case Study</span>
          <Aksestani src={aksestani} alt='' />
          <Rectright src={rectright} alt='#' />
        </div>

        {/* <div className='box-a'>
          <h2>my last freelance works</h2>
          <h3>Mr Biller - Startup</h3>
          <Mockup src={mockup} alt='' />
          <p>
            Redesign Mr Biller Landing Page become more fresh and could respresent their business
            better.
          </p>
          <span>Client from 🇦🇺</span>
          <a href='#'>
            <span>Check on live</span>
          </a>
        </div> */}
      </div>
    </div>
  )
}

const Photo = styled.img<ImageProps>`
  width: 422px;
  height: 819px;
  object-fit: cover;
`
const Aksestani = styled.img<ImageProps>`
  width: 422px;
  height: 828px;
  object-fit: cover;
`
const Mockup = styled.img<ImageProps>``

const Rectleft = styled.img<ImageProps>``
const Rectright = styled.img<ImageProps>``
