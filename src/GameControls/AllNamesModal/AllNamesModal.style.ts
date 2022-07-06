// Global Imports
import styled from "styled-components";

export const AllNamesModalWrapper = styled.div`
  background-color: white;
  position: absolute;
  top: 10%;
  left: 45%;
  min-width: 25%;
  z-index: 100%;
  box-shadow: 5px 7px 12px rgba(0, 0, 0, 0.75);
  border: solid thin black;
  padding: 0.5rem;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  &:hover {
    cursor: pointer;
  }
`;

export const ListName = styled.li<{
  isAnswered: boolean;
}>`
  font-size: 0.5rem;
  text-decoration-line: ${(props) =>
    props.isAnswered ? "line-through" : "none"};
`;
