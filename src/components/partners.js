import React from 'react'
import styled from 'styled-components'

import PartnerOrganizer from './partnerOrganizer'
import PartnerThanks from './partnerThanks'
import PartnerPartner from './partnerPartner'
import PartnerMedia from './partnerMedia'
import PartnerRegister from './partnerRegister'

const PartnersContainer = styled.div`
  text-align: center;
  padding: 0 0 10rem 0;
`

export const PartnersTitle = styled.h2`
  font-size: 2.6rem;
  color: #540cfa;
  text-align: center;
  line-height: 6rem;
  margin: 8rem 0;

  @media (max-width: 480px) {
    margin: 5rem 0;
  }
`

export const PartnersListWrapper = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const PartnersItem = styled.div`
  width: 220px;
  margin: 0 6rem 8rem 6rem;

  @media (max-width: 480px) {
    width: 90px;
    margin: 0 1rem 2rem 1rem;
  }
`

export const PartnerLogo = styled.img`
  width: 100%;
  height: auto;
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
