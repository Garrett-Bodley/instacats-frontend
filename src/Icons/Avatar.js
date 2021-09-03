import styled from "styled-components";
import { PersonCircle } from "@styled-icons/bootstrap";

const Avi = styled(PersonCircle)`
  color: #dbdbdb;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const Avatar = () => {
  return (
    <>
      <Avi />
    </>
  );
};

export default Avatar;
