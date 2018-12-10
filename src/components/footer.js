import React from 'react'
import styled from 'styled-components'

import qrcode from '../images/qrcode.png'

const FooterContainer = styled.div`
  padding: 8rem 0;
  background-color: rgba(15, 15, 70, 1);
`

const FooterInner = styled.div`
  @media (min-width: 1280px) {
    width: 1210px;
    margin: 0 auto;
  }

  @media (max-width: 1279px) {
    margin: 0 35px;
  }
`

const FooterTitle = styled.h4`
  font-size: 2.6rem;
  color: #ffffff;
  line-height: 2.4rem;
  margin: 0;
`

const FooterDetail = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  line-height: 3rem;

  @media (min-width: 1280px) {
    float: left;
    margin: 20px 168px 0 0;
    width: 400px;
  }

  @media (max-width: 1279px) {
    margin-top: 6rem;
  }
`
const FooterContacts = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  line-height: 3rem;

  @media (min-width: 1280px) {
    float: left;
    margin: 20px 168px 0 0;
    width: 333px;
  }

  @media (max-width: 1279px) {
    margin-top: 6rem;
  }
`

const FooterQrcode = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  line-height: 3rem;
  text-align: center;

  @media (min-width: 1280px) {
    float: left;
    width: 140px;
  }

  @media (max-width: 1279px) {
    margin-top: 6rem;
  }
`

const FooterQrcodeImg = styled.img`
  width: 140px;
  height: 140px;
  margin: 0;
`

const Footer = () => (
  <FooterContainer className="section footer">
    <FooterInner>
      <FooterTitle>ECUG Con</FooterTitle>
      <div className="clearfix">
        <FooterDetail>
          由 ECUG 社区主办的一年一度技术盛会，参会的社区成员涵盖 Google、微软、
          BAT、华为、京东、携程等知名企业技术高层以及七牛云、饿了么、PingCAP、Kylingence
          等创业公司创始人。自 2007 年开始举办以来，已经有逾 4000
          名技术从业者参加过 ECUG Con 。
        </FooterDetail>
        <FooterContacts>
          联&nbsp;&nbsp;系 人：许小姐
          <br />
          联系电话：+ 86 180 1746 8953
          <br />
          邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：marketing@qiniu.com
          <br />
          时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：2018 年 12 月 22 ~ 23 日
          <br />
          会议地址：深圳市 南山区 软件产业基地 5 栋 5 楼
        </FooterContacts>
        <FooterQrcode>
          <FooterQrcodeImg src={qrcode} alt="扫码购票" title="扫码购票" />
          <br />
          扫码购票
        </FooterQrcode>
      </div>
    </FooterInner>
  </FooterContainer>
)

export default Footer
