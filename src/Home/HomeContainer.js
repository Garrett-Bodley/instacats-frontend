import React from 'react';
import Card from './Card'
import { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { getPicsByPageNum } from '../Utilities/Actions/picActions'
import styled from 'styled-components';

const Div = styled.div`
  height: 100%;
  width: 935px;
  max-width: 935px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
`

const FeedContainer = styled.div`
  width: 100%;
  max-width: 615px;
`

const HomeContainer = ({ getPicsByPageNum, pics }) => {
  
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    getPicsByPageNum(pageNum);
  }, [pageNum, getPicsByPageNum])

  return(
    <Div id="home-container">
      <FeedContainer>
        {pics.map(pic => <Card key={pic.imgur_id} pic={pic}/>)}
      </FeedContainer>
    </Div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {getPicsByPageNum: () => dispatch(getPicsByPageNum())}
}

const mapStateToProps = (state) => ({
  pics: state.pics
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)