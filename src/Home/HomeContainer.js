import React from 'react';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getPics } from '../Utilities/Actions/picActions'
import styled from 'styled-components';

const Div = styled.div`
  height: 100%;
  width: 935px;
  max-width: 935px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  overflow-y: scroll;
`

const HomeContainer = ({ getPics }) => {
  
  useEffect(() => {
    getPics();
  })

  return(
    <Div id="home-container">

    </Div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {getPics: () => dispatch(getPics)}
}

export default connect(null, mapDispatchToProps)(HomeContainer)