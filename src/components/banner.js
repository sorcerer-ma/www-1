import React from 'react'
import styled from 'styled-components'

import bg1 from '../images/bg-1.png'
import bg2 from '../images/bg-2.png'
import bg3 from '../images/bg-3.png'

const BannerContainer = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
`

const BannerInfo = styled.div`
  padding: 9rem 0 9rem 30rem;
  width: 50%;
  box-sizing: border-box;

  background-position: center left;
  background-repeat: no-repeat;
  background-image: url(${bg2});

  @media (max-width: 1399px) {
    padding-left: 15rem;
    background-size: 10rem;
  }

  @media (max-width: 1279px) {
    width: 100%;
    padding: 6rem 5rem;
    background: none;
  }
`

const BannerTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 500;
  color: #000000;
  line-height: 7.2rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`

const BannerDivider = styled.div`
  background-color: #540cfa;
  height: 4px;
  width: 384px;
  margin: 4rem 0;

  @media (max-width: 480px) {
    width: 90%;
  }
`

const BannerSubTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: #3c64dc;
  line-height: 4rem;
  margin: 0;
`

const BannerSubP = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
  color: #3c64dc;
  line-height: 4rem;
  margin: 0;
`

const BannerReg = styled.div`
  width: 50%;
  padding: 12rem 0;
  text-align: center;

  background-image: url(${bg1});
  background-position: top -4px right 0;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 1279px) {
    width: 100%;
    padding: 15rem 5rem;
    margin-bottom: 6rem;

    background-image: url(${bg3});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`

const BannerRegTitle = styled.h4`
  font-size: 3.3rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 5rem;
  margin: 0;
`

const BannerRegInfo = styled.p`
  font-size: 2.6rem;
  color: #ffffff;
  line-height: 5rem;
  margin: 0;
`

const BuyTicketsButton = styled.a`
  display: inline-block;
  line-height: 6rem;
  color: #540cfa;
  font-size: 2.6rem;
  text-decoration: none;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(60, 9, 179, 0.3);
  border-radius: 9px;
  padding: 0 7.5rem;
  margin-top: 3rem;

  @media (max-width: 1279px) {
    font-size: 2rem;
    padding: 0 20px;
  }
`

const Banner = () => (
  <BannerContainer className="section banner">
    <BannerInfo>
      <BannerTitle>
        ECUG Con 2018
        <br />
        拥抱下一个十年
      </BannerTitle>
      <BannerDivider />
      <BannerSubTitle>自 2007 年，Effective Cloud User Group</BannerSubTitle>
      <BannerSubP>
        一个洋溢技术情怀的社区，关注 A（AI）、B（Big Data）、C（Cloud）前沿技术的经验分享，输出技术人关注的热点干货
      </BannerSubP>
    </BannerInfo>
    <BannerReg>
      <BannerRegTitle>ECUG Con 2018</BannerRegTitle>
      <BannerRegInfo>12月 22-23 日 深圳</BannerRegInfo>
      <BuyTicketsButton href="http://www.huodongxing.com/event/4465207886100" target="_blank">
        立即购票
      </BuyTicketsButton>
    </BannerReg>
  </BannerContainer>
)

export default Banner
