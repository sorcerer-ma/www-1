import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const SpeakerContainer = styled.div`
  @media (min-width: 1280px) {
    width: 1200px;
    margin: 200px auto;
  }

  @media (max-width: 1279px) {
    margin: 100px 35px;
  }
`

const SpeakerPhoto = styled.img`
  width: 220px;
  height: 220px;
  float: left;
  margin: 0 80px 0 0;
  border-radius: 50%;

  @media (max-width: 1279px) {
    display: block;
    margin: 0 auto;
    float: none;
  }
`

const SpeakerInfo = styled.div`
  float: left;
`

const SpeakerName = styled.h4`
  font-size: 2.2rem;
  color: #005CC7;
  line-height: 3.2rem;
  margin: 36px 0 16px 0;
`

const SpeakerTitle = styled.p`
  font-size: 2.2rem;
  color: #272727;
  line-height: 1.5;
  margin-bottom: 8px;
`

const SpeakerDescription = styled.p`
  font-size: 2.2rem;
  color: #000000;
  line-height: 4.8rem;

  @media (min-width: 1280px) {
    margin: 8px 0 0 300px;
  }

  @media (max-width: 1279px) {
    margin: 60px 0 0 0;
  }
`

const Speaker = ({ data: { prismicSpeaker } }) => {
  const { data } = prismicSpeaker
  const { name, company, title, description, photo } = data
  return (
    <Layout>
      <SpeakerContainer>
        <div className="clearfix">
          <SpeakerPhoto src={photo.url} alt={name} title={name} />
          <SpeakerInfo>
            <SpeakerName>{name}</SpeakerName>
            <SpeakerTitle>{company.text}</SpeakerTitle>
            <SpeakerTitle>{title.text}</SpeakerTitle>
          </SpeakerInfo>
        </div>

        <SpeakerDescription>{description.text}</SpeakerDescription>
      </SpeakerContainer>
    </Layout>
  );
}

export default Speaker

export const pageQuery = graphql`
  query SpeakerById($id: String!) {
    prismicSpeaker(data: {id: {eq: $id}}) {
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
