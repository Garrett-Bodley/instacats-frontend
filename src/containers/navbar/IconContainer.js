import React from 'react';
import styled from 'styled-components';
import {Home, Explore, ActivityFeed, DirectMessages} from '../../components/icons/navbarIcons'

const IconContainer = () => {

  const IconContainer = styled.div`
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
    padding-left: 24px;
    white-space: nowrap
  `

  return (
    <IconContainer className="icon-container">
      <IconWrapper>
        <Home />
        <DirectMessages/>
        <Explore/>
        <ActivityFeed/>
      </IconWrapper>
    </IconContainer>
  )
}

export default IconContainer