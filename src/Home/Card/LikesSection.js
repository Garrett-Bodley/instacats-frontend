import React from "react";
import styled from "styled-components";

const Section = styled.section`
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  padding: 0px 16px 0px 16px;
  margin-bottom: 8px;
`;

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
