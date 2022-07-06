import React from "react";
import { useAppSelector } from "../app/hooks";

import { selectCorrectlyAnsweredNames } from "../features/game/gameSlice";

import {
  NamesPanelName,
  NamesPanelWrapper,
  NamesPannelHeader,
} from "./NamesPanel.style";

type Props = {};

const NamesPanel = (props: Props) => {
  const correctlyAnsweredNames = useAppSelector(selectCorrectlyAnsweredNames);

  return (
    <NamesPanelWrapper>
      <NamesPannelHeader>Correct Guesses</NamesPannelHeader>
      {correctlyAnsweredNames?.map((name: string) => (
        <NamesPanelName>{name}</NamesPanelName>
      ))}
    </NamesPanelWrapper>
  );
};

export default NamesPanel;
