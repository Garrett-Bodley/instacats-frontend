import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Bold from "./Bold";
import { OuterWrapper, InnerWrapper } from './CommentsContainer'

const Span = styled.span`
  white-space: nowrap;
`;

const Button = styled.button`
  color: rgb(142, 142, 142);
  border: 0;
  line-height: inherit;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: inherit;
  font-weight: 400;
  background: 0 0;
`;

const Description = ({ pic }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [renderedDesc, setRenderedDesc] = useState("");
  const limit = 130;

  useEffect(() => {
    if (
      pic.user.username.length + pic.description.length > limit ||
      pic.description.match(/\n/)
    ) {
      setIsTruncated(true);
      let truncatedDesc = "";
      const words = pic.description.split(/(?= )|(?=\n)|(?=$)/);
      let i = 0;
      while (
        i < words.length &&
        !words[i].match(/\n/) &&
        pic.user.username.length + truncatedDesc.length < limit
      ) {
        truncatedDesc += words[i];
        i++;
      }
      setRenderedDesc(truncatedDesc);
    } else {
      setRenderedDesc(pic.description);
    }
  }, [pic]);

  const handleOnClick = () => {
    setRenderedDesc(pic.description);
    setIsTruncated(false);
  };

  const renderEllipses = () => {
    return (
      <>
        <Span>
          ... <Button onClick={handleOnClick}>more</Button>
        </Span>
      </>
    );
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Bold>{`${pic.user.username} `}</Bold>
        {renderedDesc}
        {isTruncated && renderEllipses()}
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Description;
