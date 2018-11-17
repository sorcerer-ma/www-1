import React from 'react'
import styled from 'styled-components'

import PartnerOrganizer from './partnerOrganizer'
import PartnerThanks from './partnerThanks'
import PartnerPartner from './partnerPartner'
import PartnerMedia from './partnerMedia'
import PartnerRegister from './partnerRegister'

const PartnersContainer = styled.div`
  text-align: center;
  padding: 10rem 0;
`

export const PartnersTitle = styled.h2`
  font-size: 2.6rem;
  color: #540cfa;
  text-align: center;
  line-height: 6rem;
  margin-bottom: 8.5rem;
`

export const PartnersListWrapper = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;

  &:after {
    content: '';
    flex: auto;
  }

  @media (min-width: 1280px) {
    margin: 0 11rem;
  }
`

export const PartnersItem = styled.div`
  margin-bottom: 8rem;

  @media (min-width: 1400px) {
    width: 20%;
  }

  @media (max-width: 1399px) and (min-width: 1280px) {
    width: 25%;
  }

  @media (max-width: 1279px) and (min-width: 0px) {
    width: 33.333%;
  }
`

export const PartnerLogo = styled.img`
  @media (min-width: 1280px) {
    width: 220px;
    height: 110px;
  }

  @media (max-width: 1279px) and (min-width: 700px) {
    width: 192px;
    height: 96px;
  }

  @media (max-width: 699px) {
    width: 96px;
    height: 48px;
  }
`

const Partners = () => (
  <PartnersContainer id="partners" className="section partners">
    <PartnerOrganizer />
    <PartnerThanks />
    <PartnerPartner />
    <PartnerMedia />
    <PartnerRegister />
  </PartnersContainer>
)

export default Partners
