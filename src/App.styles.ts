// Global Imports
import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: lightpink;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const AppHeading = styled.h1`
  font-size: clamp(1rem, 1.5rem, 2em);
`;

export const DisplayControlsWrapper = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
`;
export const NamesPanelWrapper = styled.div`
  background-color: lightgreen;
  overflow: scroll;
`;

export const NamesDisplayWrapper = styled.div`
  background-color: lightblue;
  flex-grow: 1;
`;

export const GameControlsWrapper = styled.div`
  background-color: lightpink;
  display: flex;
  flex-direction: row;
  jusitfy-content: center;
  align-items: center;
  padding: 0 1rem 3rem 0.25rem;
`;
