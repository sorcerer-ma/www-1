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
    <Speakers />
    <Agenda />
    <Previous />
    <Partners />
  </Layout>
)

export default IndexPage
