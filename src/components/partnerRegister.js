import React from 'react'

import logo from '../images/hdx.png'
import { PartnersTitle, PartnersListWrapper, PartnersItem, PartnerLogo } from './partners'

const partnerRegister = () => (
  <React.Fragment>
    <PartnersTitle>报名合作</PartnersTitle>
    <PartnersListWrapper>
      <PartnersItem>
        <PartnerLogo src={logo} alt="活动行" title="活动行" />
      </PartnersItem>
    </PartnersListWrapper>
  </React.Fragment>
)

export default partnerRegister
