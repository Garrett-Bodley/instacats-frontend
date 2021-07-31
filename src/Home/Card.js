import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  margin-bottom: 24px;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`


const Card = React.forwardRef((props, ref) => {
  
  return (
    <Article ref={ref}>
      <Image src={props.pic.src_url}></Image>
    </Article>
  )
})

export default Card
