// Global Imports
import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const AppHeading = styled.h1`
  font-size: clamp(1rem, 1.5rem, 2em);
  text-align: center;
  text-decoration-line: underline;
`;

export const DisplayControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NamesPanelWrapper = styled.div`
  overflow: scroll;
  border: solid thin black;
`;

export const NamesDisplayWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  jusitfy-content: center;
  align-items: center;
  padding: 0 1rem 3rem 0.25rem;
`;

export const GameControlsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  jusitfy-content: center;
  align-items: center;
  padding: 0 1rem 3rem 0.25rem;
`;
