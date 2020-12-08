import React from 'react'
import styled from 'styled-components'

import qrcode from '../images/qrcode.png'

const FooterContainer = styled.div`
  padding: 8rem 0;
`

const FooterInner = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const FooterContacts = styled.div`
  color: #FFF;
  font-size: 1.6rem;
  line-height: 3.2rem;
  flex: 0 1 auto;
`

const FooterQrcode = styled.div`
  margin-left: 20%;
  color: #FFF;
  font-size: 1.6rem;
  line-height: 3.2rem;
  text-align: center;
  flex: 0 1 auto;

  @media only screen and (max-width: 767px) {
    margin-top: 4rem;
    margin-left: 0;
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
      <FooterContacts>
        联&nbsp;&nbsp;系 人：郭女士
        <br />
        联系电话：+ 86 186 6898 1922
        <br />
        邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：marketing@qiniu.com
        <br />
        时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间：2021 年 1 月 16 日 ~ 17 日
        <br />
        会议地址：xxx
      </FooterContacts>

      <FooterQrcode>
        <FooterQrcodeImg src={qrcode} alt="扫码购票" title="扫码购票" />
        <br />
        关注我们
      </FooterQrcode>
    </FooterInner>
  </FooterContainer>
)

export default Footer
