import React from 'react'
import styled from 'styled-components'

// 无用的组件先注释掉
// import PartnerOrganizer from './partnerOrganizer'
// import PartnerThanks from './partnerThanks'
import PartnerPartner from './partnerPartner'
// import PartnerMedia from './partnerMedia'
// import PartnerRegister from './partnerRegister'
import PartnerSupporter from './partnerSupporter'

const PartnersContainer = styled.div`
  margin: 0 auto;
  padding: 6rem 0;
  max-width: 1080px;
  text-align: center;

  @media only screen and (max-width: 767px) {
    padding-bottom: 0;
  }
`

export const PartnersTitle = styled.h2`
  margin-bottom: 0;
  font-size: 4rem;
  color: #FFF;
  text-align: center;
  line-height: 6rem;
`

export const PartnersListWrapper = styled.div`
  margin-top: 6rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-around;
  }
`

export const PartnersItem = styled.div`
  width: 22rem;
  margin: 0 2rem 6rem;

  @media only screen and (max-width: 767px) {
    width: 40%;
    margin: 0 0 6rem;
  }
`

export const PartnerLogo = styled.img`
  width: 100%;
  height: auto;
`

export const Tip = styled.div`
  color: #FFF;
  font-size: 3.2rem;
  line-height: 4rem;

  @media only screen and (max-width: 767px) {
    font-size: 2.4rem;
  }
`

const Partners = () => (
  <PartnersContainer className="section partners">
    <PartnerPartner />

    <PartnerSupporter />
  </PartnersContainer>
)

export default Partners
