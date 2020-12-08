import React from 'react'
import styled from 'styled-components'

import ComponentDivider from './componentDivider'

const BannerContainer = styled.div`
  margin: 0 auto;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BannerTitleImage = styled.img`
  width: 768px;
  margin-top: 6rem;
  min-height: 20rem;
  background-color: #DDD;

  @media only screen and (max-width: 767px) {
    width: 80%;
  }
`

const BannerBtnWrapper = styled.div`
  width: 80%;
  margin-top: 6rem;
  text-align: center;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const BannerBtnDesc = styled.div`
  color: #FFF;
  font-size: 2.4rem;
  flex: 0 1 auto;

  & > p {
    margin: 0;
    line-height: 3rem;
  }
`

const BannerBuyBtn = styled.a`
  margin-left: 20%;
  padding: 1rem 3rem;
  color: #2C5AD8;
  border-radius: .4rem;
  background-color: #FFF;
  font-size: 2.4rem;
  text-decoration: none;
  box-shadow: .6rem .6rem .8rem 0 rgba(43, 89, 216, .3);
  transition: all .3s;
  flex: 0 1 auto;

  &:hover {
    color: #FFF;
    background-color: #2C5AD8;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 2rem;
    margin-left: 0;
  }
`

const BannerInfo = styled.div`
  width: 80%;
  margin-top: 10rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  & > div {
    margin-bottom: 10rem;
    width: 40%;
    flex: 0 1 auto;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;

    & > div {
      width: auto;
    }
  }
`

const BannerInfoTitle = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  color: #FFF;
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.8rem;
`

const BannerInfoDesc = styled.div`
  color: #FFF;
  font-size: 2rem;
  line-height: 3.6rem;

  p {
    margin: 0;
  }
`

const Banner = () => (
  <BannerContainer className="section banner">
    <BannerTitleImage />

    <BannerBtnWrapper>
      <BannerBtnDesc>
        <p>中国&nbsp;&middot;&nbsp;上海</p>
        <p>2021.1.16 - 1.17</p>
      </BannerBtnDesc>

      <BannerBuyBtn
        href="TODO"
        target="_blank"
      >
        立即参会
      </BannerBuyBtn>
    </BannerBtnWrapper>

    <BannerInfo>
      <div>
        <BannerInfoTitle>
          ECUG
        </BannerInfoTitle>
        <BannerInfoDesc>
          <p>自 2007 年，Effective Cloud User Group</p>
          <p>一个洋溢技术情怀的社区，关注 A（AI）、B（Big Data）、C（Cloud）前沿技术的经验分享，输出技术人关注的热点干货</p>
        </BannerInfoDesc>
      </div>
      <div>
        <BannerInfoTitle>
          ECUG Con
        </BannerInfoTitle>
        <BannerInfoDesc>
          <p>由 ECUG 社区主办的一年一度技术盛辉，参会的社区成员覆盖 Google、微软、BAT、华为、京东、携程等知名企业技术高层以及七牛云、饿了么、PingCAP、Kylingence 等创业公司创始人。自 2007 年开始举办以来，已经有逾 4000 名技术从业者参加过 ECUG Con</p>
        </BannerInfoDesc>
      </div>
    </BannerInfo>

    <ComponentDivider />
  </BannerContainer>
)

export default Banner
