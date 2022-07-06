// Global Imports
import styled from "styled-components";

export const LastScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 0 0 0 1rem;
  color: black;
`;

export const Heading = styled.span`
  font-weight: 800;
  font-size: 2rem;
  margin: 0 0 1rem 0;
  color: #d40e8c;
`;
export const Subheading = styled.span`
  margin: 0 0 0 0;
  position: relative;
  top: -0.75rem;
`;

export const NamesList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  top: -0.75rem;
  /* margin: 0 0 1rem 0; */
`;

export const NameItem = styled.div`
  font-size: 0.75rem;
  margin: 0.25rem 0 0 1rem;
  display: flex;
  align-items: center;
`;

export const NameSpan = styled.span`
  font-weight: 600;
`;

export const TitleSpan = styled.span`
  font-size: 0.5rem;
  margin: 0 0 0 0.5rem;
  font-style: italic;
`;

export const EndingNote = styled.p`
  font-size: 0.5rem;
  margin: 0 0 1rem 1rem;
  width: 50%;
  font-style: italic;
`;
