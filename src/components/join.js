import React from 'react'
import styled from 'styled-components'

import ImgJoinPrice from '../images/img-join-price.png'

import TitleDivider from './titleDivider'

const JoinContainer = styled.div`
  padding: 6rem 0;
  text-align: center;
`

const JoinTitle = styled.h2`
  margin-bottom: 0;
  font-size: 4rem;
  color: #FFF;
  text-align: center;
  line-height: 6rem;
`

const JoinInner = styled.div`
  width: 100%;
  margin: 6rem 0 4rem;
`

const JoinImg = styled.img`
  max-width: 100%;
  height: auto;
`

const Join = () => (
  <JoinContainer className="section join">
    <JoinTitle>
      报名参会
      <TitleDivider />
    </JoinTitle>

    <JoinInner>
      <JoinImg
        src={ImgJoinPrice}
        alt="报名参会，门票 & 价格"
        title="报名参会，门票 & 价格"
      />
    </JoinInner>
  </JoinContainer>
)

export default Join
