import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { PartnersTitle, PartnersListWrapper, PartnersItem, PartnerLogo } from './partners'

import TitleDivider from './titleDivider'

const PartnerPartner = () => (
  <StaticQuery
    query={graphql`
      query PartnerQuery {
        allPrismicPartner(sort: { fields: [data___order] }) {
          edges {
            node {
              data {
                id
                name
                logo {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <PartnersTitle>
          合作伙伴
          <TitleDivider />
        </PartnersTitle>

        <PartnersListWrapper>
          {data.allPrismicPartner.edges.map(p => {
            let { id, name, logo } = p.node.data

            return (
              <PartnersItem key={`partner-${id}`}>
                <PartnerLogo src={logo.url} alt={name} title={name} />
              </PartnersItem>
            )
          })}
        </PartnersListWrapper>
      </React.Fragment>
    )}
  />
)

export default PartnerPartner
