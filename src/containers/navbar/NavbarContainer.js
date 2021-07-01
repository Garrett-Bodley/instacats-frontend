import React from 'react';
import styled from 'styled-components';
import logo from '../../Instacats_logo.png'
import IconContainer from './IconContainer'
import '../../css/navbar.css';

const NavbarContainer = () => {

  const Nav = styled.nav`
    display: flex;
    background-color: #fafafa;
    padding: 0;
    position: relative;
    height: 54px;
  `

  const Spacer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    height: 55px
  `

  const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    flex: 1 9999 0%;
  `

  const SearchContainer = styled.div`
    display:flex;
    justify-content: center;
    flex 0 1 auto;
    min-width: 125px;
    width: 215px;
  `  

  return(
    <Nav>
      <Spacer className="spacer">
        <LogoContainer className="logo-container">
          <img alt="Instacats Logo" aria-label="Instacats" src={logo} />
        </LogoContainer>
        <SearchContainer>
          <input value="boop"></input>
        </SearchContainer>
        <IconContainer classNme="icon-container" />
      </Spacer>
    </Nav>
  )
}

export default NavbarContainer