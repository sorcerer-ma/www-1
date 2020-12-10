import React from 'react'
import styled from 'styled-components'

import ImgBannerBg from '../images/img-banner-bg.jpg'
import ImgBannerTitle from '../images/img-banner-title.png'

const BannerContainer = styled.div`
  position: relative;
  margin: 0 auto;

  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(${ImgBannerBg});

  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BannerTitleImage = styled.img`
  width: 768px;
  height: auto;
  margin-top: 10rem;

  @media only screen and (max-width: 767px) {
    width: 80%;
  }
`

const BannerDescWrapper = styled.div`
  width: 80%;
  margin-top: 4rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const BannerDescItem = styled.div`
  width: 40%;
  color: #FFF;
  font-size: 2.4rem;
  line-height: 3.6rem;
  flex: 0 1 auto;

  &:first-of-type {
    text-align: right;
  }

  @media only screen and (max-width: 767px) {
    width: auto;
    text-align: center;
  }
`

const BannerBuyBtn = styled.a`
  margin-top: 5rem;
  padding: 1rem 3rem;
  color: #2C5AD8;
  border-radius: .4rem;
  background-color: #FFF;
  font-size: 2.4rem;
  text-decoration: none;
  box-shadow: .6rem .6rem 1rem 0 rgba(44, 90, 216, .6);
  transition: all .3s;
  outline: none;

  &:active,
  &:focus {
    color: #2C5AD8;
    background-color: #FFF;
  }

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
  margin-top: 6rem;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  & > div {
    margin-bottom: 4rem;
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

const BannerInfoTitle = styled.h2`
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
    <BannerTitleImage
      src={ImgBannerTitle}
      alt="云上有为，未来无界，2021 ECUG Con 全球技术大会"
      title="云上有为，未来无界，2021 ECUG Con 全球技术大会"
    />

    <BannerDescWrapper>
      <BannerDescItem>
        中国&nbsp;&middot;&nbsp;上海
      </BannerDescItem>

      <BannerDescItem>
        2021.1.16 - 1.17
      </BannerDescItem>
    </BannerDescWrapper>

    <BannerBuyBtn
      href=""
      target="_blank"
      rel="noreferrer noopener"
    >
      点击抢购 - 早鸟票
    </BannerBuyBtn>

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
          <p>由 ECUG 社区主办的一年一度技术盛会，参会的社区成员涵盖 Google、微软、BAT、华为、京东、携程等知名企业技术高层以及七牛云、饿了么、PingCAP、Kylingence 等创业公司创始人。自 2007 年开始举办以来，已经有逾 4000 名技术从业者参加过 ECUG Con</p>
        </BannerInfoDesc>
      </div>
    </BannerInfo>
  </BannerContainer>
)

export default Banner
