import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  display:flex;
  flex-basis: 0 1 auto;
  position: relative;
  justify-content: center;
  align-items: center;
  flex 0 1 auto;
  height: 28px;
  min-width: 125px;
  width: 215px;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  color: #8e8e8e;
  position: absolute;
  border-radius: 3px;
  border: solid 1px #dbdbdb;
  background: #fafafa;
  font-size: 14px
`

const IconWrapper = styled.div`
  position: absolute;
  left: -4px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  box-sizing: border-box;
`

const DefaultText = styled.span`
  display: inline-block;
  max-width: 140px;
  display: inline-block;
  color: #8e8e8e;
  font-size: 14px;
`

const SearchIcon = styled.i`
  color: #8e8e8e;
  display: inline-block;
  font-size: 14px;
  padding: 0 4px 0 0
`

const SearchContainer = () => {

  const [query, setQuery] = useState("")

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  const handleOnClick = (e) => {
    document.getElementById('search-input').focus()
    debugger
  }

  return(
    <Wrapper onClick={handleOnClick} id="search-container">
      <Input id="search-input" onChange={handleQueryChange} value={query} ></Input>
      <IconWrapper>
        <SearchIcon className="bi bi-search"></SearchIcon>
        <DefaultText>Search</DefaultText>
      </IconWrapper>
    </Wrapper>
  )

}

export default SearchContainer