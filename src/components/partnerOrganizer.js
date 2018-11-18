import React from 'react'

import logo from '../images/qiniu.png'
import { PartnersTitle, PartnersListWrapper, PartnersItem, PartnerLogo } from './partners'

const PartnerOrganizer = () => (
  <React.Fragment>
    <PartnersTitle>承办方</PartnersTitle>
    <PartnersListWrapper>
      <PartnersItem>
        <PartnerLogo src={logo} alt="七牛云" title="七牛云" />
      </PartnersItem>
    </PartnersListWrapper>
  </React.Fragment>
)

export default PartnerOrganizer
