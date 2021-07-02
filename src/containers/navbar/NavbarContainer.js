import React from 'react';
import styled from 'styled-components';
import LogoContainer from './LogoContainer';
import IconContainer from './IconContainer';
import SearchContainer from './SearchContainer';
import '../../css/navbar.css';

const Nav = styled.nav`
  display: flex;
  background-color: #fff;
  padding: 0;
  position: relative;
  height: 54px;
  border-bottom: 1px solid #dbdbdb;
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

const NavbarContainer = () => {

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