import React from 'react'
import styled from 'styled-components'

const ThemesContainer = styled.div`
  padding: 8rem 0;
  background-image: linear-gradient(139deg, #9c09db 0%, #1c0fd7 100%);
  text-align: center;
`

const ThemesTitle = styled.h4`
  font-size: 2.6rem;
  color: #fff;
  text-align: center;
  line-height: 6rem;
`

const ThemesInner = styled.div`
  display: -webkit-flex; /* Safari */
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
`

const ThemesItem = styled.div`
  width: 300px;
  box-sizing: border-box;
  padding: 4rem 3rem;
  border: 0.3rem solid #fff;
  border-top-width: 0;
  position: relative;
  margin: 3.6rem 1.8rem 1.8rem 1.8rem;

  &:before,
  &:after {
    position: absolute;
    display: block;
    top: 0;
    content: '';
    width: calc(50% - 1.8rem);
    height: 0.3rem;
    background-color: #fff;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  @media (max-width: 1023px) {
    width: 200px;
  }
`

const ThemesItemTop = styled.span`
  position: absolute;
  top: -1.8rem;
  left: 50%;
  margin-left: -1.8rem;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 0.3rem solid #fff;
  border-radius: 50%;
`

const ThemesItemTopInner = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #fff;
`

const ThemesItemTitle = styled.h4`
  font-weight: 500;
  font-size: 3.4rem;
  color: #ffffff;
  text-align: center;
  margin: 0;

  @media (max-width: 1023px) {
    font-size: 2.6rem;
  }
`

const ThemesItemDivider = styled.span`
  display: inline-block;
  width: 6rem;
  height: 0.3rem;
  background-color: #ffffff;
  margin: 4rem 0;

  @media (max-width: 1023px) {
    margin: 3rem 0;
  }
`

const ThemesItemP = styled.p`
  font-size: 2.6rem;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 4.8rem;
  text-align: left;
  margin: 0;

  @media (max-width: 1023px) {
    font-size: 2rem;
    line-height: 3.6rem;
  }
`

const data = [
  { title: '高可用架构', description: '大规模互联网系统的架构设计和实现案例分享' },
  { title: '人工智能', description: 'AI 技术与应用场景实践，如深度学习、图像识别' },
  { title: '大数据平台', description: '大数据领域的实战经验分享，如 Hadoop、Spark 等' },
  { title: '智慧运维', description: 'Devops、AIOps 探索与最佳实践分享' }
]

const Themes = () => (
  <ThemesContainer className="section themes">
    <ThemesTitle>ECUG Con 四大技术主题</ThemesTitle>
    <ThemesInner className="clearfix">
      {data.map(d => (
        <ThemesItem key={d.title}>
          <ThemesItemTop>
            <ThemesItemTopInner />
          </ThemesItemTop>
          <ThemesItemTitle>{d.title}</ThemesItemTitle>
          <ThemesItemDivider />
          <ThemesItemP>{d.description}</ThemesItemP>
        </ThemesItem>
      ))}
    </ThemesInner>
  </ThemesContainer>
)

export default Themes
