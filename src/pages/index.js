import React from 'react'

import Layout from '../components/layout'
import Banner from '../components/banner'
import Speakers from '../components/speakers'
import Themes from '../components/themes'
import Partners from '../components/partners'
import Previous from '../components/previous'

const IndexPage = () => (
  <Layout>
    <Banner />
    <Themes />
    <Speakers />
    <Previous />
    <Partners />
  </Layout>
)

export default IndexPage
