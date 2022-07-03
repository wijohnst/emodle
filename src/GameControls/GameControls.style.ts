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
  color: ${(props) => (props.isDisabled ? "lightgreen" : "lightpink")};
`;
