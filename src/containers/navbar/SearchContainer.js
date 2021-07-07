import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import SearchIcon from '../../components/icons/SearchIcon'

const Div = styled.div`
  display:flex;
  flex-basis: 0 1 auto;
  position: relative;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  height: 28px;
  min-width: 125px;
  width: 215px;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  color: #fafafa;
  position: absolute;
  border-radius: 3px;
  border: solid 1px #dbdbdb;
  background: #fafafa;
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

const Span = styled.span`
  display: inline-block;
  max-width: 140px;
  display: inline-block;
  color: #8e8e8e;
  font-size: 14px;
`

const SearchContainer = () => {

  const [query, setQuery] = useState("Search")
  const [isHidden, setIsHidden] = useState(false)

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  return(
    <Div id="search-container" className="search-container">
      <Input 
        id="search-input" 
        className="search-input" 
        onChange={handleQueryChange} 
        value={query}
      />
      <IconWrapper id="icon-wrapper" className="icon-wrapper">
        <div hidden={isHidden}>
          <SearchIcon className="bi bi-search"></SearchIcon>
          <Span>{query}</Span>
        </div>
      </IconWrapper>
    </Div>
  )

}

export default SearchContainer