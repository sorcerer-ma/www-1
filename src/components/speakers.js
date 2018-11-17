import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const SpeakersContainer = styled.div`
  text-align: center;
  padding: 10rem 0;
`

const SpeakersTitle = styled.h2`
  font-size: 2.6rem;
  color: #540cfa;
  text-align: center;
  line-height: 6rem;
  margin: 0 0 8rem 0;
`

const SpeakersDivider = styled.div`
  background-color: #540cfa;
  height: 4px;
  width: 384px;
  margin: 0 auto 5rem auto;

  @media (max-width: 383px) {
    width: 90%;
  }
`

const SpeakersText = styled.p`
  font-size: 2.2rem;
  color: #3c64dc;
  text-align: center;
  line-height: 6rem;
  padding: 0 20px;
  margin-bottom: 0 auto 50px auto;
`

const SpeakersButton = styled.a`
  display: inline-block;
  background: #540cfa;
  box-shadow: 0 2px 4px 0 rgba(60, 9, 179, 0.3);
  border-radius: 9px;
  font-size: 2.2rem;
  color: #ffffff;
  text-align: center;
  line-height: 6rem;
  padding: 0 10rem;
  margin: 0 auto;
  text-decoration: none;
`

const SpeakersListWrapper = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const SpeakersItem = styled.div`
  width: 220px;
  margin: 0 6rem 8rem 6rem;

  @media (max-width: 480px) {
    width: 90px;
    margin: 0 1rem 4rem 1rem;
  }
`

const SpeakerPhoto = styled.img`
  border-radius: 50%;

  width: 100%;
  height: auto;
`

const SpeakerName = styled.h4`
  font-size: 2.2rem;
  color: #005cc7;
  text-align: center;
  line-height: 3.2rem;
  margin: 3rem 0 1.6rem 0;
`

const SpeakerInfo = styled.p`
  font-size: 1.5rem;
  color: #272727;
  text-align: center;
  line-height: 3rem;
  margin: 0;
`

const SpeakersList = () => (
  <StaticQuery
    query={graphql`
      query SpeakersQuery {
        allPrismicSpeaker(sort: { fields: [data___order] }) {
          edges {
            node {
              data {
                id
                name
                title {
                  text
                }
                company {
                  text
                }
                photo {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <SpeakersListWrapper>
        {data.allPrismicSpeaker.edges.map(speaker => {
          let { id, name, title, company, photo } = speaker.node.data
          return (
            <SpeakersItem key={id}>
              <Link to={`/speakers/${id}`}>
                <SpeakerPhoto src={photo.url} alt={name} title={name} />
              </Link>
              <SpeakerName>{name}</SpeakerName>
              <SpeakerInfo>{company.text}</SpeakerInfo>
              <SpeakerInfo>{title.text}</SpeakerInfo>
            </SpeakersItem>
          )
        })}
      </SpeakersListWrapper>
    )}
  />
)

const Speakers = () => (
  <SpeakersContainer id="speakers" className="section speakers">
    <SpeakersTitle>演讲嘉宾</SpeakersTitle>
    <SpeakersList />
    <SpeakersDivider />
    <SpeakersText>加入 ECUG，和业界大牛一起解锁 ABC 实践新姿势，更有机会与偶像大咖共进晚餐哦 ！</SpeakersText>
    <SpeakersButton href="https://www.gatsbyjs.org/docs/styled-components/" target="_blank">
      报名成为讲师
    </SpeakersButton>
  </SpeakersContainer>
)

export default Speakers
