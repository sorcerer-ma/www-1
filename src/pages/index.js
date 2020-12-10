import React from 'react'

import Layout from '../components/layout'
import Banner from '../components/banner'
import Speakers from '../components/speakers'
import Agenda from '../components/agenda'
import Themes from '../components/themes'
import Partners from '../components/partners'
import Join from '../components/join'

const IndexPage = () => (
  <Layout>
    <Banner />
    <div id="themes">
      <Themes />
    </div>
    <div id="speakers">
      <Speakers />
    </div>
    <div id="agenda">
      <Agenda />
    </div>
    <div id="partners">
      <Partners />
    </div>
    <div id="join">
      <Join />
    </div>
  </Layout>
)

export default IndexPage
