import React from 'react';
import styled from 'styled-components';
import IconContainer from './IconContainer'
import SearchContainer from './SearchContainer'
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

  return(
    <Nav>
      <Spacer className="spacer">
        <LogoContainer/>
        <SearchContainer/>
        <IconContainer/>
      </Spacer>
    </Nav>
  )
}

export default NavbarContainer