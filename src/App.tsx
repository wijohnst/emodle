import React from "react";

import NameDisplay from "./NamesDisplay/NameDisplay";
import NamesPanel from "./NamesPanel/NamesPanel";
import GameControls from "./GameControls/GameControls";
import Lifelines from "./GameControls/Lifelines";
import AllNamesModal from "./GameControls/AllNamesModal/AllNamesModal";

import { useAppSelector } from "./app/hooks";
import {
  selectShouldShowLastScreen,
  selectIsAllNamesModalShown,
} from "./features/game/gameSlice";

import "./App.css";
import {
  AppWrapper,
  NamesPanelWrapper,
  NamesDisplayWrapper,
  DisplayControlsWrapper,
  GameControlsWrapper,
  AppHeading,
  Subheading,
} from "./App.styles";

import GameData from "./game.json";
import { getShuffledNames } from "./utils";

type Props = {};

const App = (props: Props) => {
  const isLastScreen = useAppSelector(selectShouldShowLastScreen);
  const isAllNamesModalShown = useAppSelector(selectIsAllNamesModalShown);

  const shuffledNames = getShuffledNames(GameData.names);

  return (
    <AppWrapper>
      <NamesPanelWrapper>
        <AppHeading> EMODLE </AppHeading>
        <Subheading>
          <p>
            Learn your coworkers' names by associating them with a serires of
            increasingly obscure emoji-glyphs.
          </p>
        </Subheading>
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
      {isAllNamesModalShown && <AllNamesModal shuffledNames={shuffledNames} />}
    </AppWrapper>
  );
};

export default App;
