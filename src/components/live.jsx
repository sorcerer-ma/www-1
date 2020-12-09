import React, { Component } from 'react'
import videojs from 'video.js'

import styled from 'styled-components'
import 'video.js/dist/video-js.min.css'

const LiveContent = styled.div`
  background-color: #000;
`

const VideoWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 300px;

  @media (max-width: 1280px) {
    width: 100%;
  }
`

class VideoPlayer extends Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={node => this.videoNode = node}
            className="video-js vjs-big-play-centered"
          ></video>
        </div>
      </div>
    )
  }
}

export default class Live extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)
  }

  render() {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      fluid: true,
      sources: [{
        src: 'https://pili-live-hls.qshare.support2technical.me/qshare/ecug2020.m3u8',
        type: 'application/x-mpegURL'
      }]
    }

    return (
      <LiveContent>
        <VideoWrapper>
          <VideoPlayer {...videoJsOptions} />
        </VideoWrapper>
      </LiveContent>
    )
  }
}
