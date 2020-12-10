import React from 'react'
import styled from 'styled-components'

const BuyTicketsContainer = styled.div`
  padding-bottom: 8rem;
  text-align: center;
`

const BuyTicketsButton = styled.a`
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
`

const BuyTickets = () => (
  <BuyTicketsContainer className="section buy-ticket">
    <BuyTicketsButton
      href="https://sensors.qiniu.com/t/a1K"
      target="_blank"
      rel="noreferrer noopener"
    >
      点击抢购 - 早鸟票
    </BuyTicketsButton>
  </BuyTicketsContainer>
)

export default BuyTickets
