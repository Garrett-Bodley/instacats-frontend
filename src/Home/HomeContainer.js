import React from 'react';
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { getPics } from '../actions/picActions'
import styled from 'styled-components';

const Div = styled.div`
  height: 100%;
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