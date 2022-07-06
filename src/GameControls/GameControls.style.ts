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

export const FiftyFiftyLifeline = styled.div`
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: row;
  jusitfy-content: center;
  align-items: center;
`;

export const AnswerSubmit = styled.div`
  display: flex;
  jusitfy-content: center;
  align-items: center;
`;

export const LifelineName = styled.span`
  margin: 0 1rem 0 1rem;
`;

export const Title = styled.span``;
