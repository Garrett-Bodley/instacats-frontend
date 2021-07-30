import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  margin-bottom: 24px;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
`


const Card = ({ pic }) => {
  
  return (
    <Article>
      <Image src={pic.src_url}></Image>
    </Article>
  )
}

export default Card
