import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Bold = styled.span`
  font-size: 14px;
  font-weight: 600;
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
          Liked by <Bold>{`${likes[0].user.username}`}</Bold> and{" "}
          <Bold>others</Bold>
        </span>
      );
    }
  };

  return <Section>{renderMessage(likes)}</Section>;
};

export default LikesSection;
