import React from 'react'

import logo from '../images/hdx.png'
import { PartnersTitle, PartnerLogo } from './partners'

const partnerRegister = () => (
  <React.Fragment>
    <PartnersTitle>报名合作</PartnersTitle>
    <div>
      <div style={{ margin: '0 auto 80px auto' }}>
        <PartnerLogo src={logo} alt="活动行" title="活动行" />
      </div>
    </div>
  </React.Fragment>
)

export default partnerRegister
