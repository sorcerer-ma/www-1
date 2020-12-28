import React from 'react'
import styled from 'styled-components'

import { StaticQuery, graphql } from 'gatsby'

import TitleDivider from './titleDivider'

const AgendaContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 6rem 0;
  max-width: 1080px;

  @media only screen and (max-width: 767px) {
    padding-bottom: 0;
  }
`

const AgendaTitle = styled.h2`
  margin-bottom: 0;
  font-size: 4rem;
  color: #FFF;
  text-align: center;
  line-height: 6rem;
`

const AgendaGroupWrapper = styled.div`
  margin: 6rem 0 4rem;
  border: .2rem solid #2C59D8;
`

const AgendaGroup = styled.div`
  @media only screen and (max-width: 1279px) {
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`

const AgendaGroupTitle = styled.div`
  position: relative;
  margin: 3rem 6rem;
  color: #2C59D8;
  font-size: 2.4rem;
  line-height: 3.6rem;

  @media only screen and (max-width: 1279px) {
    width: calc(100% - 12rem);
    flex: 0 1 auto;
  }
`

const AgendaGroupItem = styled.div`
  margin: 3rem 6rem;
  color: #FFF;
  font-size: 1.8rem;
  line-height: 3.2rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media only screen and (max-width: 1279px) {
    width: calc(50% - 12rem);
    margin-top: 0;
    flex: 0 1 auto;
    flex-direction: column;

    & > div {
      width: auto;
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 767px) {
    width: auto;
  }
`

const AgendaItemTime = styled.div`
  width: 12rem;
  flex: 0 0 auto;
`

const AgendaItemSpeakTitle = styled.div`
  width: 40rem;
  margin-left: 2rem;
  flex: 0 0 auto;
`

const AgendaItemSpeakerName = styled.div`
  width: 10rem;
  margin-left: 2rem;
  flex: 0 0 auto;
`

const AgendaItemSpeakerDesc = styled.div`
  margin-left: 2rem;
  flex: 1 1 auto;
`

const AgendaGroupDivider = styled.div`
  width: 100%;
  height: .2rem;
  background-color: #2C59D8;
`

const AgendaList = () => (
  <StaticQuery
    query={graphql`
      query AgendaQuery {
        allPrismicAgenda(sort: { fields: [data___order] }) {
          group(field: data___time) {
            edges {
              node {
                data {
                  type
                  time
                  duration
                  title
                  speaker_name
                  speaker_desc
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <AgendaGroupWrapper>
        {data.allPrismicAgenda.group.map((group, gi) => {
          const showDivider = ((gi + 1) % 2 === 0) && (gi + 1) < data.allPrismicAgenda.group.length

          return (
            <AgendaGroup key={gi}>
              <AgendaGroupTitle>
                {group.edges[0].node.data.time}
              </AgendaGroupTitle>

              {group.edges.map((agd, ai) => {
                const { duration, title, speaker_name, speaker_desc } = agd.node.data

                return (
                  <AgendaGroupItem key={ai}>
                    <AgendaItemTime>
                      {duration}
                    </AgendaItemTime>

                    <AgendaItemSpeakTitle>
                      {title}
                    </AgendaItemSpeakTitle>

                    <AgendaItemSpeakerName>
                      {speaker_name}
                    </AgendaItemSpeakerName>

                    <AgendaItemSpeakerDesc>
                      {speaker_desc}
                    </AgendaItemSpeakerDesc>
                  </AgendaGroupItem>
                )
              })}

              {showDivider ? <AgendaGroupDivider /> : null}
            </AgendaGroup>
          )
        })}
      </AgendaGroupWrapper>
    )}
  />
)

const Agenda = () => (
  <AgendaContainer className="section agenda">
    <AgendaTitle>
      大会议程
      <TitleDivider />
    </AgendaTitle>

    <AgendaList />
  </AgendaContainer>
)

export default Agenda
