import React from 'react'

import logo from '../images/qiniu.png'
import { PartnersTitle, PartnerLogo } from './partners'

const PartnerOrganizer = () => (
  <React.Fragment>
    <PartnersTitle>承办方</PartnersTitle>
    <div>
      <div style={{margin: '0 auto 80px auto'}}>
        <PartnerLogo src={logo} alt="七牛云" title="七牛云" />
      </div>
    </div>
  </React.Fragment>
)

export default PartnerOrganizer
