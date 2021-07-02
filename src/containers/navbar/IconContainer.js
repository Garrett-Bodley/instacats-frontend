import React from 'react';
import styled from 'styled-components';
import {Home, Explore, ActivityFeed, DirectMessages} from '../../components/icons/navbarIcons'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  flex: 1 0 0%
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  white-space: nowrap
`

const Avatar = styled.i`
  height: 22px;
  width: 22px;
  display: inline-block;
  font-size: 22px;
  margin: 0 4px;
  text-align: center;
`

const IconContainer = () => {

  return (
    <Container className="icon-container">
      <IconWrapper>
        <Home />
        <DirectMessages/>
        <Explore/>
        <ActivityFeed/>
        <Avatar className="bi bi-person-circle"/>
      </IconWrapper>
    </Container>
  )
}

export default IconContainer