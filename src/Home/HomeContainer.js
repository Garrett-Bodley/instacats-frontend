import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import useInfiniteScroll from './useInfiniteScroll';

import Card from './Card/Card'

const Div = styled.div`
  height: 100%;
  width: 935px;
  max-width: 935px;
  display: flex;
  order: 4;
  padding-top: 30px;
  align-items: center;
  background-color: #fafafa;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 615px;
`

const HomeContainer = () => {
  
  const pics = useSelector(state => state.pics)
  const { loading, lastCardRef } = useInfiniteScroll()

  return(
    <Div id="home-container">
      <Wrapper>
        {pics.map((pic, index) => {
          if(index === pics.length - 1){
            return <Card key={pic.imgur_id} ref={lastCardRef} pic={pic}/>
          }else{
            return <Card key={pic.imgur_id} pic={pic}/>
          }
        })}
        {loading && <div>Loading</div>}
      </Wrapper>
    </Div>

  )
}

export default HomeContainer