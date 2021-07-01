import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  flex 0 1 auto;
  height: 28px;
  min-width: 125px;
  width: 215px;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  color: #dbdbdb;
  border-radius: 3px;
  border: solid 1px #dbdbdb;
  background: #fafafa;
  font-size: 14px
`

const SearchContainer = () => {

  const [query, setQuery] = useState("")

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  return(
    <Wrapper className="search-container">
      <Input onChange={handleQueryChange} defaultValue="Search" value={query} ></Input>
      <div></div>
    </Wrapper>
  )

}

export default SearchContainer