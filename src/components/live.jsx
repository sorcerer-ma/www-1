import React from 'react'
import {
  Player,
  BigPlayButton,
  ControlBar,
  PlayToggle,
  VolumeMenuButton,
  FullscreenToggle
} from 'video-react'
import HLSSource from './hlsSource'

import styled from 'styled-components'

import "../../node_modules/video-react/dist/video-react.css";

const LiveContent = styled.div`
  background-color: #000;
  margin-top: -20px;
`

const VideoWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 300px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`

export default class Live extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LiveContent>
        <VideoWrapper>
          <Player playsInline>
            <BigPlayButton position="center" />
            <HLSSource
              isVideoChild
              src="http://pili-live-hls.qshare.qiniucdn.com/qshare/test123.m3u8"
            />
            <ControlBar
              autoHide={true}
              disableDefaultControls={true}>
              <PlayToggle></PlayToggle>
              <VolumeMenuButton></VolumeMenuButton>
              <FullscreenToggle></FullscreenToggle>
            </ControlBar>
          </Player>
        </VideoWrapper>
      </LiveContent>
    )
  }
}
