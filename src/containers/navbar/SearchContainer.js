import React from 'react';
import styled from 'styled-components';
import { useState, useRef } from 'react';
import SearchIcon from '../../components/icons/SearchIcon'

const Div = styled.div`
  display: flex;
  flex-direction: column;
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
  color: #262626;
  font-size: 14px;
  position: absolute;
  outline: 0;
  border-radius: 3px;
  border: solid 1px #dbdbdb;
  line-height: 18px;
  padding: 3px 10px 3px 24px;
  background: #fafafa;
`

const IconOuterWrapper = styled.div`
  position: absolute;
  width: 215px;
  height: 28px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 0 15px;
  box-sizing: border-box;
  background: #fafafa;
  border-radius: 3px;
  border: solid 1px #dbdbdb;
`

const IconInnerWrapper = styled.div`
  position: relative;
  left: -5px;
  display: block;
  flex-direction: column;
  align-content: center;
  text-align: center;
`

const Span = styled.span`
  display: inline;
  max-width: 140px;
  display: inline-block;
  color: #8e8e8e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  vertical-align: middle;
`

const LeftSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 11px;
  top: 8px;
  z-index: 2;
`

const RightSearchIcon = styled(SearchIcon)`
  position: absolute;
  color: #cccccc;
  font-size: 15px;
  right: 5px;
  top: 6px;
  z-index: 3;
`

const SearchContainer = () => {

  const [query, setQuery] = useState("Search")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef()

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  const handleOnClick = () => {
    setIsFocused(true);
    if(query === "Search"){
      setQuery("") 
      inputRef.current.focus();
    }else{
      inputRef.current.select()
    };
  }

  const handleXCircleClick = () => {
    setQuery("Search")
    setIsFocused(false)
    inputRef.current.blur()
  }

  const preventBlur = (e) => {
    e.preventDefault()
  }

  const handleOnBlur = () => {
    if(query === ""){ setQuery("Search") };
    setIsFocused(false)
  }

  return(
    <Div id="search-container" className="search-container">
      <Input 
        id="search-input" 
        className="search-input" 
        onChange={handleQueryChange} 
        value={query}
        ref={inputRef}
        onBlur={handleOnBlur}
        autoComplete="off"
      />
      {isFocused ? 
        <>
          <LeftSearchIcon className="bi bi-search" />
          <RightSearchIcon onMouseDown={preventBlur} onClick={handleXCircleClick} className="bi bi-x-circle-fill"/>
        </> : 
        <IconOuterWrapper id="icon-wrapper" className="icon-wrapper" onClick={handleOnClick}>
          <IconInnerWrapper>
            <SearchIcon className="bi bi-search"/>
            <Span>{query}</Span>
          </IconInnerWrapper>
        </IconOuterWrapper>
      }
    </Div>
  )

}

export default SearchContainer

