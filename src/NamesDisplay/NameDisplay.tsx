import React from "react";

import { useAppSelector } from "../app/hooks";
import { GlyphsWrapper } from "./NameDisplay.style";

import {
  selectCurrentQuestionIndex,
  selectCurrentQuestionStatus,
  selectShouldShowLastScreen,
} from "../features/game/gameSlice";

import GameData from "../game.json";
import { CurrentQuestionStatus } from "../sharedTypes";
import LastScreen from "./LastScreen/LastScreen";

type Props = {};

const NameDisplay = (props: Props) => {
  const currentQuestionIndex: number = useAppSelector(
    selectCurrentQuestionIndex
  );

  const shouldShowLastScreen: boolean = useAppSelector(
    selectShouldShowLastScreen
  );

  const currentQuestionStatus: CurrentQuestionStatus | null = useAppSelector(
    selectCurrentQuestionStatus
  );

  const { firstGlyph, lastGlyph } = GameData.names[currentQuestionIndex];

  const fullGlyph = `${firstGlyph} ${lastGlyph}`;

  return (
    <>
      {!shouldShowLastScreen && (
        <>
          {currentQuestionStatus === CurrentQuestionStatus.CORRECT && (
            <GlyphsWrapper>✅</GlyphsWrapper>
          )}
          {currentQuestionStatus === CurrentQuestionStatus.INCORRECT && (
            <GlyphsWrapper>❌</GlyphsWrapper>
          )}
          {currentQuestionStatus === null && (
            <GlyphsWrapper>{fullGlyph}</GlyphsWrapper>
          )}
        </>
      )}
      {shouldShowLastScreen && <LastScreen />}
    </>
  );
};

export default NameDisplay;
