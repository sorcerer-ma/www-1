import React from 'react'

import logo from '../images/msup.png'
import { PartnersTitle, PartnerLogo } from './partners'

const PartnersThanks = () => (
  <React.Fragment>
    <PartnersTitle>特别鸣谢</PartnersTitle>
    <div>
      <div style={{ margin: '0 auto 80px auto' }}>
        <PartnerLogo src={logo} alt="麦思博" title="麦思博" />
      </div>
    </div>
  </React.Fragment>
)

export default PartnersThanks
