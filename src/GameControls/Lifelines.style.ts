// Global Imports
import styled from "styled-components";

export const LifelinesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  jusitfy-content: center;
  align-items: center;
  position: relative;
  bottom: 2rem;
  margin: 0 0 0 0.25rem;
`;

export const Lifeline = styled.button<{
  isUsed: boolean;
}>`
  background-color: ${(props) => (props.isUsed ? "lightgrey" : "white")};
  height: 1rem;
  width: 3rem;
  margin: 0.25rem;
  text-decoration: none;
  text-decoration-line: ${(props) => (props.isUsed ? "line-through" : "none")};
  border: solid thin black;
  border-color: ${(props) => (props.isUsed ? "grey" : "black")};
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.isUsed ? "none" : "2px 2px 7px rgba(0,0,0,.75)"};
  &:hover {
    cursor: pointer;
  }
`;
