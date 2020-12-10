import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {
  PartnersTitle,
  PartnersListWrapper,
  PartnersItem,
  PartnerLogo,
  Tip
} from './partners'

import TitleDivider from './titleDivider'

const PartnerSupporter = () => (
  <StaticQuery
    query={graphql`
      query SupporterQuery {
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
        <PartnersTitle
          style={{
            paddingTop: '6rem'
          }}
        >
          社区支持
          <TitleDivider />
        </PartnersTitle>

        <PartnersListWrapper>
          {data.allPrismicMedia.edges.map(p => {
            const { id, name, logo } = p.node.data

            return (
              <PartnersItem
                key={`supporter-${id}`}
              >
                <PartnerLogo
                  src={logo.url}
                  alt={name}
                  title={name}
                />
              </PartnersItem>
            )
          })}
        </PartnersListWrapper>

        <Tip>更多合作伙伴和社区正在加入我们</Tip>
      </React.Fragment>
    )}
  />
)

export default PartnerSupporter
