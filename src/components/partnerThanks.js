import React from 'react'

import logo from '../images/msup.png'
import { PartnersTitle, PartnersListWrapper, PartnersItem, PartnerLogo } from './partners'

const PartnersThanks = () => (
  <React.Fragment>
    <PartnersTitle>特别鸣谢</PartnersTitle>
    <PartnersListWrapper>
      <PartnersItem>
        <PartnerLogo src={logo} alt="麦思博" title="麦思博" />
      </PartnersItem>
    </PartnersListWrapper>
  </React.Fragment>
)

export default PartnersThanks
