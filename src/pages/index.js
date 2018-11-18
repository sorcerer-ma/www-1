import React from 'react'

import Layout from '../components/layout'
import Banner from '../components/banner'
import Speakers from '../components/speakers'
import Agenda from '../components/agenda'
import Themes from '../components/themes'
import Partners from '../components/partners'
import Previous from '../components/previous'

const IndexPage = () => (
  <Layout>
    <Banner />
    <Themes />
    <div id="speakers">
      <Speakers />
    </div>
    <div id="agenda">
      <Agenda />
    </div>
    <div id="previous">
      <Previous />
    </div>
    <div id="partners">
      <Partners />
    </div>
  </Layout>
)

export default IndexPage
