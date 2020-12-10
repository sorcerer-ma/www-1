import React from 'react'
import styled from 'styled-components'

import previousWeb from '../images/prevw.png'
import previousMobile from '../images/prevm.png'

import TitleDivider from './titleDivider'

const PreviousContainer = styled.div`
  padding: 6rem 0;
  text-align: center;
`

const PreviousTitle = styled.h2`
  margin-bottom: 0;
  font-size: 4rem;
  color: #FFF;
  text-align: center;
  line-height: 6rem;
`

const PreviousInner = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 6rem;
  margin-bottom: 4rem;
  max-width: 1080px;
`

const PreviousImg = styled.img`
  max-width: 100%;
  height: auto;
`

const windowGlobal = typeof window !== 'undefined' && window

class Previous extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: windowGlobal.innerWidth,
    }
  }

  handleWindowResize = () => {
    this.setState({ windowWidth: windowGlobal.innerWidth })
  }

  componentDidMount() {
    windowGlobal.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount() {
    windowGlobal.removeEventListener('resize', this.handleWindowResize)
  }

  render() {
    let { windowWidth } = this.state

    return (
      <PreviousContainer className="section previous">
        <PreviousTitle>
          历届回顾
          <TitleDivider />
        </PreviousTitle>

        <PreviousInner>
          {windowWidth > 1080 ? (
            <PreviousImg src={previousWeb} alt="历届回顾" title="历届回顾" />
          ) : (
            <PreviousImg src={previousMobile} alt="历届回顾" title="历届回顾" />
          )}
        </PreviousInner>
      </PreviousContainer>
    )
  }
}

export default Previous
