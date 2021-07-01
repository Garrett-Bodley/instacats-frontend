import React from 'react';
import styled from 'styled-components';
import logo from '../../Instacats_logo.png';

const LogoContainer = () => {

  const SearchContainer = styled.div`
    display:flex;
    justify-content: center;
    flex 0 1 auto;
    min-width: 125px;
    width: 215px;
  `  

  return(
    <LogoContainer className="search-container">
      <img alt="Instacats Logo" aria-label="Instacats" src={logo} />
    </LogoContainer>
  )

}

export default LogoContainer