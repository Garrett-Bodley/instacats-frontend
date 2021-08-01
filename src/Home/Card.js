import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  margin-bottom: 24px;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`

const Video = styled.video`
  max-width: 100%;
  height: auto;
`


const Card = React.forwardRef((props, ref) => {
  
  return (
    <Article ref={ref}>
      {!props.pic.animated ? <Image src={props.pic.src_url} /> 
        : <Video controls autoplay>
            <source src={props.pic.src_url} type="video/mp4"></source>
          </Video>
      }
    </Article>
  )
})

export default Card
