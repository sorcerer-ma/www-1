import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const SpeakerContainer = styled.div`
  padding: 10rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media only screen and (max-width: 767px) {
    padding: 10rem 6rem;
    flex-direction: column;
  }
`

const SpeakerPhoto = styled.img`
  width: 22rem;
  height: auto;
  margin: 0 8rem 0 0;
  border: .4rem solid #2C59D8;
  box-shadow: -1rem 1rem 0 .2rem rgba(0, 0, 0, 1);
  flex: 0 0 auto;

  @media only screen and (max-width: 767px) {
    margin: 0 auto;
  }
`

const SpeakerInfo = styled.div`
  flex: 1 1 auto;

  @media only screen and (max-width: 767px) {
    margin-top: 4rem;
  }
`

const SpeakerName = styled.h2`
  margin: 0 0 1.6rem 0;
  font-size: 2.2rem;
  color: #FFF;
  line-height: 3.2rem;
`

const SpeakerTitle = styled.p`
  margin: 0 0 .8rem 0;
  color: #2C59D8;
  font-size: 2.2rem;
  line-height: 1.5;
`

const SpeakerDescription = styled.p`
  margin-top: .8rem;
  color: #FFF;
  font-size: 2.2rem;
  line-height: 4.8rem;
`

const Speaker = ({ data: { prismicSpeaker } }) => {
  const { data } = prismicSpeaker
  const { name, company, title, description, photo } = data

  return (
    <Layout>
      <SpeakerContainer>
        <SpeakerPhoto
          src={photo.url}
          alt={name}
          title={name}
        />

        <SpeakerInfo>
          <SpeakerName>
            {name}
          </SpeakerName>

          <SpeakerTitle>
            {company.text}
          </SpeakerTitle>

          <SpeakerTitle>
            {title.text}
          </SpeakerTitle>

          <SpeakerDescription>
            {description.text}
          </SpeakerDescription>
        </SpeakerInfo>
      </SpeakerContainer>
    </Layout>
  )
}

export default Speaker

export const pageQuery = graphql`
  query SpeakerById($id: String!) {
    prismicSpeaker(data: { id: { eq: $id } }) {
      data {
        id
        name
        title {
          text
        }
        company {
          text
        }
        description {
          text
        }
        photo {
          url
        }
      }
    }
  }
`
