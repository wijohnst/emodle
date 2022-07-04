// Global Imports
import styled from "styled-components";

export const AnswerInput = styled.input`
  width: 100%;
  height: 1rem;
  font-size: 0.75rem;
`;

export const SubmitButton = styled.input<{
  isDisabled: boolean;
}>`
  height: 1rem;
  font-size: 0.75rem;
  margin: 0 0 0 0.1rem;
  color: ${(props) => (props.isDisabled ? "lightgrey" : "inherit")};
  background-color: "white";
  border: none;
  box-shadow: ${(props) =>
    props.isDisabled ? "none" : "5px 5px 5px rgba(0, 0, 0, 0.5)"};

  &:hover {
    cursor: ${(props) => (props.isDisabled ? "inherit" : "pointer")};
  }
`;

export const OtherButton = styled.button`
  min-height: 1rem;
  font-size: 0.75rem;
  margin: 0 0 0 0.1rem;
  background-color: "white";
  border: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;
