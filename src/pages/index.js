import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
// import Speakers from '../components/speakers'
import Themes from '../components/themes'
import Partners from '../components/partners'
import Previous from '../components/previous'

const IndexPage = () => (
  <Layout>
    <Themes />
    {/* <Speakers /> */}
    <Partners />
    <Previous />
  </Layout>
)

export default IndexPage
