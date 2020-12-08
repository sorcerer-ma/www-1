import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'

import Navigation from '../components/navigation'
import BuyTickets from '../components/buyTickets'
import Footer from '../components/footer'
import favicon from '../images/favicon.png'

import '../styles/reset.css'
import '../styles/utils.css'
import './layout.css'

const LayoutContainer = styled.div`
  background-color: #010D24;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <LayoutContainer>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords.join(','),
            },
          ]}
          link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
        >
          <html lang="zh-CN" />
        </Helmet>
        {/* 导航 */}
        <Navigation />

        <div
          style={{
            margin: '88px auto 0',
            maxWidth: 1920,
            padding: '0',
            paddingTop: 0,
            scrollBehavior: 'smooth',
          }}
        >
          {children}
        </div>
        {/* 立即购票 */}
        <BuyTickets />
        {/* 页脚 */}
        <Footer />
      </LayoutContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
