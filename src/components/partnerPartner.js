import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { PartnersTitle, PartnersListWrapper, PartnerLogo } from './partners'

const PartnersItem = styled.div`
  margin-bottom: 8rem;
  width: 33.333%;
`

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
        <PartnersTitle>合作伙伴</PartnersTitle>
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
