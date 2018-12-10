import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {
  PartnersTitle,
  PartnersListWrapper,
  PartnersItem,
  PartnerLogo,
} from './partners'

const PartnersMedia = () => (
  <StaticQuery
    query={graphql`
      query MediaQuery {
        allPrismicMedia(sort: { fields: [data___order] }) {
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
        <PartnersTitle>合作媒体</PartnersTitle>
        <PartnersListWrapper>
          {data.allPrismicMedia.edges.map(p => {
            let { id, name, logo } = p.node.data
            return (
              <PartnersItem key={`media-${id}`}>
                <PartnerLogo src={logo.url} alt={name} title={name} />
              </PartnersItem>
            )
          })}
        </PartnersListWrapper>
      </React.Fragment>
    )}
  />
)

export default PartnersMedia
