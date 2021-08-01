import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import useInfiniteScroll from './useInfiniteScroll';

import Card from './Card'

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

const HomeContainer = () => {
  
  const pics = useSelector(state => state.pics)
  const { loading, lastCardRef } = useInfiniteScroll()

  return(
    <Div id="home-container">
      <FeedContainer>
        {pics.map((pic, index) => {
          if(index === pics.length - 1){
            return <Card key={pic.imgur_id} ref={lastCardRef} pic={pic}/>
          }else{
            return <Card key={pic.imgur_id} pic={pic}/>
          }
        })}
        {loading && <div>Loading</div>}
      </FeedContainer>
    </Div>

  )
}

export default HomeContainer