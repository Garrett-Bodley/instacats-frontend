import React from 'react';
import Card from './Card'
import { useEffect, useState, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
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

const HomeContainer = () => {
  
  const dispatch = useDispatch()
  const [pageNum, setPageNum] = useState(1)
  const pics = useSelector(state => state.pics)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(getPicsByPageNum(pageNum));
  }, [pageNum, dispatch])

  const observer = useRef()
  const lastCardRef = useCallback(node => {
    if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) setPageNum(prevNum => prevNum++)
    })
    if(node) observer.current.observe(node)
  }, [loading])
  

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
      </FeedContainer>
    </Div>

  )
}

export default HomeContainer