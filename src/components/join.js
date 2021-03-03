import React from 'react'
import styled from 'styled-components'

import IconJoinHot from '../images/icon-join-hot.png'
import ImgJoinPrice from '../images/img-join-price.png'

import TitleDivider from './titleDivider'

const JoinContainer = styled.div`
  padding: 6rem 0;
  text-align: center;
`

const JoinTitle = styled.h2`
  position: relative;
  margin-bottom: 0;
  font-size: 4rem;
  color: #FFF;
  text-align: center;
  line-height: 6rem;
`

const JoinHotIcon = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  position: absolute;
  top: calc(50% - 1rem);
  left: calc(50% + 12rem);

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${IconJoinHot});

  transform: translate(-50%, -50%);
`

const JoinInner = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 6rem;
  margin-bottom: 4rem;
`

const JoinImg = styled.img`
  max-width: 100%;
  height: auto;
`

const Join = () => (
  <JoinContainer className="section join">
    <JoinTitle>
      报名参会
      <JoinHotIcon />
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
