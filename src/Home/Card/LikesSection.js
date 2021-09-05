import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Bold = styled.span`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const Anchor = styled.a`
  color: rgb(38, 38, 38);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    opacity: 0.5;
  }
`;

const LikesSection = ({ likes }) => {
  const renderMessage = (likes) => {
    if (!likes) return null;
    if (likes.length === 0) {
      return null;
    } else if (likes.length === 1) {
      return (
        <span>
          Liked by <Bold>{`${likes[0].user.username}`}</Bold>
        </span>
      );
    } else if (likes.length > 1) {
      return (
        <span>
          Liked by{" "}
          <Bold>{<Anchor href="#">{likes[0].user.username}</Anchor>}</Bold> and{" "}
          <Bold>others</Bold>
        </span>
      );
    }
  };

  return <Section>{renderMessage(likes)}</Section>;
};

export default LikesSection;
