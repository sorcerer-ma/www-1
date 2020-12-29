import React from 'react'
import styled from 'styled-components'

import ImgPrize from '../images/img-prize.png'

import TitleDivider from './titleDivider'

const PrizeContainer = styled.div`
  padding: 4rem 0;
  text-align: center;
`

const PrizeTitle = styled.h2`
  margin-bottom: 0;
  font-size: 4rem;
  color: #FFF;
  text-align: center;
  line-height: 6rem;
`

const PrizeInner = styled.div`
  width: 100%;
  margin: 6rem 0 4rem;
`

const PrizeImg = styled.img`
  max-width: 100%;
  height: auto;
`

const Prize = () => (
  <PrizeContainer className="section prize">
    <PrizeTitle>
      现场奖品
      <TitleDivider />
    </PrizeTitle>

    <PrizeInner>
      <PrizeImg
        src={ImgPrize}
        alt="现场奖品"
        title="现场奖品"
      />
    </PrizeInner>
  </PrizeContainer>
)

export default Prize
