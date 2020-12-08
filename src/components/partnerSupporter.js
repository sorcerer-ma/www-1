import React from 'react'

import { PartnersTitle, PartnersListWrapper, PartnersItem, PartnerLogo } from './partners'

import logo from '../images/hdx.png'

import TitleDivider from './titleDivider'

const PartnerSupporter = () => (
  <React.Fragment>
    <PartnersTitle>
      社区支持
      <TitleDivider />
    </PartnersTitle>

    <PartnersListWrapper>
      <PartnersItem>
        <PartnerLogo src={logo} alt="活动行" title="活动行" />
      </PartnersItem>

      <PartnersItem>
        <PartnerLogo src={logo} alt="活动行" title="活动行" />
      </PartnersItem>
    </PartnersListWrapper>
  </React.Fragment>
)

export default PartnerSupporter
