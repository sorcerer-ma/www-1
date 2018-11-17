import React from 'react'
import styled from 'styled-components'

import previousWeb from '../images/prevw.png'
import previousMobile from '../images/prevm.png'

const PreviousContainer = styled.div`
  padding: 8rem 0;
  background-image: linear-gradient(45deg, #1833af 0%, #723cc1 100%);
  text-align: center;
`

const PreviousTitle = styled.h4`
  font-size: 2.6rem;
  color: #fff;
  text-align: center;
  line-height: 6rem;
`

const PreviousInner = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
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
      <PreviousContainer id="previous" className="section previous">
        <PreviousTitle>ECUG 历届回顾</PreviousTitle>
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
