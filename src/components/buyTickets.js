import React from 'react'
import styled from 'styled-components'

const BuyTicketsContainer = styled.div`
  text-align: center;
  padding: 7rem 0;
  background-color: #d7f9ff;
`

const BuyTicketsButton = styled.a`
  display: inline-block;
  line-height: 6rem;
  color: #fff;
  font-size: 2.6rem;
  text-decoration: none;
  background-color: #540cfa;
  box-shadow: 0 2px 4px 0 rgba(60, 9, 179, 0.3);
  border-radius: 9px;
  padding: 0 42px;

  @media (max-width: 1279px) {
    font-size: 2rem;
    padding: 0 20px;
  }
`

const BuyTickets = () => (
  <BuyTicketsContainer className="section buy-ticket">
    <BuyTicketsButton
      href="http://www.huodongxing.com/event/4465207886100"
      target="_blank"
    >
      立即购票，参与 ECUG Con 2018
    </BuyTicketsButton>
  </BuyTicketsContainer>
)

export default BuyTickets
