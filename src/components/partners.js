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
  padding: 6rem 0;
  text-align: center;
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
`

export const PartnersItem = styled.div`
  width: 220px;
  margin: 0 6rem 8rem 6rem;
`

export const PartnerLogo = styled.img`
  width: 100%;
  height: auto;
`

const Partners = () => (
  <PartnersContainer className="section partners">
    {/* <PartnerOrganizer /> */}
    {/* <PartnerThanks /> */}
    <PartnerPartner />
    {/* <PartnerMedia /> */}
    {/* <PartnerRegister /> */}
    <PartnerSupporter />
  </PartnersContainer>
)

export default Partners
