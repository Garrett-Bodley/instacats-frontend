import React from 'react';
import styled from 'styled-components';
import logo from '../../Instacats_logo.png';

const LogoContainer = () => {

  const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    flex: 1 9999 0%;
  `

  return(
    <LogoContainer className="search-container">
      <img alt="Instacats Logo" aria-label="Instacats" src={logo} />
    </LogoContainer>
  )

}

export default LogoContainer