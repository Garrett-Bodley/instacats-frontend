import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Bold from "./Bold";
import Description from "./Description";

const Container = styled.div`
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 16px 0px 16px;
`;

export const OuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
`;

export const InnerWrapper = styled.div`
  display: block;
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

const CommentsContainer = ({ pic }) => {
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (pic.comments.length > 2) setIsTruncated(true);
  }, [pic]);

  const showAllComments = () => {
    setIsTruncated(false);
  };

  const renderTruncationToggle = (num) => {
    return (
      <OuterWrapper onClick={showAllComments}>
        <Button>View all {`${num}`} comments</Button>
      </OuterWrapper>
    );
  };

  const renderComments = (comments) => {
    const rendered = isTruncated ? comments.slice(0, 2) : comments;
    return rendered.map((comment, index) => (
      <OuterWrapper key={index}>
        <InnerWrapper>
          <Bold>{`${comment.user.username} `}</Bold>
          {`${comment.text}`}
        </InnerWrapper>
      </OuterWrapper>
    ));
  };

  return (
    <Container>
      {pic.description.length !== 0 && <Description pic={pic} />}
      {isTruncated && renderTruncationToggle(pic.comments.length)}
      {renderComments(pic.comments)}
    </Container>
  );
};

export default CommentsContainer;
