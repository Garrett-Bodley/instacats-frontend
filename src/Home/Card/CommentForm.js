import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Section from "./Section";
import EmojiButton from "../../Icons/EmojiButton";
import { EnabledPostButton, DisabledPostButton } from "../../Icons/PostButton";

const FormSection = styled(Section)`
  margin: 4px 0 0 0;
  border-top: 1px solid rgb(239, 239, 239);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: stretch;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Text = styled.textarea`
  display: flex;
  flex-grow: 1;
  max-height: 80px;
`;

const CommentForm = () => {
  const [inputVal, setInputVal] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (inputVal === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [inputVal]);

  const handleOnClick = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <FormSection>
      <Wrapper>
        <Form method="POST">
          <EmojiButton type="button" onClick={handleOnClick} />
          <Text
            value={inputVal}
            onChange={handleOnChange}
            type="text"
            aria-label="Add a comment…"
            placeholder="Add a comment…"
            autocomplete="off"
            autocorrect="off"
          ></Text>
          {isEmpty ? <DisabledPostButton>Post</DisabledPostButton> : <EnabledPostButton>Post</EnabledPostButton>}
        </Form>
      </Wrapper>
    </FormSection>
  );
};

export default CommentForm;
