import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import Avatar from '../Icons/Avatar'

const Article = styled.article`
  margin-bottom: 24px;
  border: 1px solid rgb(219, 219, 219)
  border-radius: 3px;
`

const Header = styled.header`
  height: 60px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgb(219, 219, 219);
  font-size: 14px;
  font-weight: 600;
`

const UsernameContainer = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding-left: 15px;
`

const Card = React.forwardRef((props, ref) => {
  
  return (
    <Article ref={ref}>
      <Header>
        <Avatar/>
        <UsernameContainer>
          {props.pic.user}
        </UsernameContainer>
      </Header>
      <Content pic={props.pic} />
    </Article>
  )
})

export default Card
