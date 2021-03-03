import React from 'react'
import styled from 'styled-components'

import ImgFooterBg from '../images/img-footer-bg.jpg'
import qrcode from '../images/qrcode.jpg'
import ImgTraffic from '../images/img-traffic.png'

const FooterContainer = styled.div`
  padding: 8rem 0;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${ImgFooterBg});
`

const FooterInner = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 1279px) {
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.div`
  color: #FFF;
  margin-bottom: 1.2rem;
  font-size: 2.4rem;

  @media only screen and (max-width: 1279px) {
    text-align: center;
  }
`

const FooterContacts = styled.div`
  margin: 0 4rem;
  color: #FFF;
  font-size: 1.6rem;
  line-height: 3.4rem;
  flex: 0 1 auto;

  & > p {
    margin: 0 0 3rem;
  }

  @media only screen and (max-width: 1279px) {
    & > p {
      margin: 0 0 1.2rem;
    }
  }
`

const FooterTraffic = styled.div`
  margin: 0 4rem;
  color: #FFF;
  font-size: 1.4rem;
  line-height: 3.4rem;
  flex: 0 1 auto;

  @media only screen and (max-width: 1279px) {
    margin-top: 4rem;
    text-align: center;
  }
`

const FooterTrafficLink = styled.a`
  outline: none;
`

const FooterTrafficImg = styled.img`
  width: auto;
  height: 220px;
  margin: 0;
`

const FooterQrcode = styled.div`
  margin: 0 4rem;
  color: #FFF;
  font-size: 1.4rem;
  line-height: 3.4rem;
  flex: 0 1 auto;

  @media only screen and (max-width: 1279px) {
    margin-top: 4rem;
  }
`

const FooterQrcodeImg = styled.img`
  width: auto;
  height: 220px;
  margin: 0;
`

const Footer = () => (
  <FooterContainer className="section footer">
    <FooterInner>
      <FooterContacts>
        <Title>联系我们</Title>
        <p>购票热线：+400-808-9176 转 3</p>
        <p>商务赞助：zhangcheng@qiniu.com</p>
        <p>媒体支持：wangqun01@qiniu.com</p>
        <p>议题申请：marketing@qiniu.com</p>
      </FooterContacts>

      <FooterTraffic>
        <Title>交通指南</Title>
        <FooterTrafficLink
          href={`https://api.map.baidu.com/geocoder?address=${encodeURIComponent('上海市长宁区协和路1102号')}&output=html&src=webapp.baidu.openAPIdemo`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FooterTrafficImg
            src={ImgTraffic}
            alt="交通指南"
            title="点击查看地图"
          />
        </FooterTrafficLink>
        <br />
        会议时间：2021 年 4 月 10 日 - 11 日
        <br />
        会议地址：上海市长宁区协和路 1102 号建滔诺富特酒店
      </FooterTraffic>

      <FooterQrcode>
        <Title>会务助手</Title>
        <FooterQrcodeImg
          src={qrcode}
          alt="会务助手"
          title="会务助手"
        />
      </FooterQrcode>
    </FooterInner>
  </FooterContainer>
)

export default Footer
