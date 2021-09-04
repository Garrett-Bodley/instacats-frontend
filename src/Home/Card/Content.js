import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-width: 100%;
  height: auto;
`

const Video = styled.video`
  max-width: 100%;
  height: auto;
`

const Content = ({pic}) => {
  if(pic.animated){
    return (
      <Video controls autoplay>
        <source src={pic.src_url} type="video/mp4"></source>
      </Video>
  )}else{
    return (<Image src={pic.src_url} />
  )}
}

export default Content