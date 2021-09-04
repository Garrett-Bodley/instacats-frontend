import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Bold = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Description = ({ pic }) => {
  return (
    <Section>
      <Bold>{`${pic.user.username} `}</Bold>
      {`${pic.description}`}
    </Section>
  );
};

export default Description;
