import React from 'react';
import styled from 'styled-components';
import logo from '../../Instacats_logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  flex: 1 9999 0%;
`

const LogoContainer = () => {

  return(
    <Container className="search-container">
      <img alt="Instacats Logo" aria-label="Instacats" src={logo} />
    </Container>
  )

}

export default LogoContainer