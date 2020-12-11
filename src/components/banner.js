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
  color: #2B5ADB;
  border: .4rem solid #2B5ADB;
  border-radius: .4rem;
  background-color: #EFF4FC;
  background-image: linear-gradient(#EFF4FC, #879FE8);
  font-size: 2.4rem;
  font-weight: 800;
  font-style: italic;
  text-decoration: none;
  box-shadow: .6rem .6rem .2rem .1rem rgba(44, 90, 216, .4);
  transition: all .3s;
  outline: none;

  &:active,
  &:focus {
    color: #2B5ADB;
    background-color: #EFF4FC;
    background-image: linear-gradient(#EFF4FC, #879FE8);
  }

  &:hover {
    color: #EFF4FC;
    background-color: #2B5ADB;
    background-image: none;
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
  font-size: 1.6rem;
  line-height: 3.2rem;
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
      href="https://sensors.qiniu.com/t/a1K"
      target="_blank"
      rel="noreferrer noopener"
      title="点击抢购 - 早鸟票"
    >
      点击抢购 - 早鸟票
    </BannerBuyBtn>

    <BannerInfo>
      <div>
        <BannerInfoTitle>
          ECUG
        </BannerInfoTitle>
        <BannerInfoDesc>
          ECUG 全称为 Effective Cloud User Group（实效云计算用户组），成立于 2007 年的 CN Erlounge II，由许式伟发起，是科技领域不可或缺的高端前沿团体。作为行业技术进步的一扇窗口，ECUG 汇聚众多技术人，关注当下热点技术与尖端实践，共同引领行业技术的变革。
        </BannerInfoDesc>
      </div>
      <div>
        <BannerInfoTitle>
          ECUG Con
        </BannerInfoTitle>
        <BannerInfoDesc>
          ECUG Con 是由 ECUG 社区主办的技术盛会，发起于 2007 年，目前已成功举办 13 届。期间，来自 Google、微软、BAT、华为、京东、携程等知名企业以及七牛云、PingCAP、饿了么等众多互联网科技公司的权威技术大神纷纷参与，影响了上万名技术从业者。
        </BannerInfoDesc>
      </div>
    </BannerInfo>
  </BannerContainer>
)

export default Banner
