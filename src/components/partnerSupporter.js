import React from 'react'

import { PartnersTitle, PartnersListWrapper, PartnersItem, PartnerLogo } from './partners'

import IconRubyChina from '../images/ruby-china.jpg'

import TitleDivider from './titleDivider'

const PartnerSupporter = () => (
  <React.Fragment>
    <PartnersTitle
      style={{
        paddingTop: '6rem'
      }}
    >
      社区支持
      <TitleDivider />
    </PartnersTitle>

    <PartnersListWrapper>
      <PartnersItem>
        <PartnerLogo
          src={IconRubyChina}
          alt="Ruby China"
          title="Ruby China"
        />
      </PartnersItem>

      <PartnersItem>
        <PartnerLogo
          src={IconRubyChina}
          alt="Ruby China"
          title="Ruby China"
        />
      </PartnersItem>
    </PartnersListWrapper>
  </React.Fragment>
)

export default PartnerSupporter
