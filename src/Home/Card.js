import React from 'react'
import styled from 'styled-components'
import Content from './Content'

const Article = styled.article`
  margin-bottom: 24px;
`



const Card = React.forwardRef((props, ref) => {

  <i class="bi bi-person-circle"></i>
  
  return (
    <Article ref={ref}>
      <Content pic={props.pic} />
    </Article>
  )
})

export default Card
