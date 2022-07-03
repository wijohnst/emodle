import React from "react";

import NameDisplay from "./NamesDisplay/NameDisplay";
import NamesPanel from "./NamesPanel/NamesPanel";
import GameControls from "./GameControls/GameControls";

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
        <GameControlsWrapper>
          <GameControls />
        </GameControlsWrapper>
      </DisplayControlsWrapper>
    </AppWrapper>
  );
};

export default App;
