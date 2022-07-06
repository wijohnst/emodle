import React from "react";

import NameDisplay from "./NamesDisplay/NameDisplay";
import NamesPanel from "./NamesPanel/NamesPanel";
import GameControls from "./GameControls/GameControls";
import Lifelines from "./GameControls/Lifelines";

import { useAppSelector } from "./app/hooks";
import { selectShouldShowLastScreen } from "./features/game/gameSlice";

import "./App.css";
import {
  AppWrapper,
  NamesPanelWrapper,
  NamesDisplayWrapper,
  DisplayControlsWrapper,
  GameControlsWrapper,
  AppHeading,
} from "./App.styles";

type Props = {};

const App = (props: Props) => {
  const isLastScreen = useAppSelector(selectShouldShowLastScreen);

  return (
    <AppWrapper>
      <NamesPanelWrapper>
        <AppHeading> Guess The Name</AppHeading>
        <NamesPanel />
      </NamesPanelWrapper>
      <DisplayControlsWrapper>
        <NamesDisplayWrapper>
          <NameDisplay />
        </NamesDisplayWrapper>
        {!isLastScreen && (
          <>
            <GameControlsWrapper>
              <GameControls />
            </GameControlsWrapper>
            <Lifelines />
          </>
        )}
      </DisplayControlsWrapper>
    </AppWrapper>
  );
};

export default App;
