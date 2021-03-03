import React from 'react'
import styled from 'styled-components'

const BuyTicketsContainer = styled.div`
  padding-bottom: 8rem;
  text-align: center;
`

const BuyTicketsButton = styled.a`
  padding: 1rem 3rem;
  color: #FFF;
  border-radius: .4rem;
  background-color: #3051C9;
  font-size: 2.4rem;
  text-decoration: none;
  box-shadow: .6rem .6rem .2rem .1rem rgba(44, 90, 216, .4);
  transition: all .3s;
  outline: none;

  &:active,
  &:focus {
    color: #FFF;
    background-color: #3051C9;
  }

  &:hover {
    color: #3051C9;
    background-color: #FFF;
  }
`

const BuyTickets = () => (
  <BuyTicketsContainer className="section buy-ticket">
    <BuyTicketsButton
      href="http://hdxu.cn/hwkZX"
      target="_blank"
      rel="noreferrer noopener"
      title="点击抢购 - 早鸟票"
    >
      点击抢购 - 早鸟票
    </BuyTicketsButton>
  </BuyTicketsContainer>
)

export default BuyTickets
