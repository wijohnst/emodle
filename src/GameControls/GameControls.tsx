import React from "react";
import { AnswerInput, SubmitButton, OtherButton } from "./GameControls.style";

import { useAppSelector, useAppDispatch } from "../app/hooks";

import {
  selectCurrentQuestionIndex,
  setCurrentQuestionStatus,
  resetCurrentQuestionStatus,
  addCorrectlyAnsweredName,
  incrementCurrentQuestionIndex,
  updateShouldShowLastScreen,
} from "../features/game/gameSlice";

import { CurrentQuestionStatus } from "../sharedTypes";

import GameData from "../game.json";

type Props = {};

const GameControls = (props: Props) => {
  const dispatch = useAppDispatch();

  const [answer, setAnswer] = React.useState<string | undefined>("");
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [isIncorrect, setIsIncorrect] = React.useState(false);

  const currentQuestionIndex = useAppSelector(selectCurrentQuestionIndex);

  const isDisabled = React.useMemo(() => {
    return answer === "";
  }, [answer]);

  const numberOfNames = React.useMemo(() => {
    return GameData.names.length;
  }, []);

  const correctAnswer = React.useMemo(() => {
    const currentName = GameData.names[currentQuestionIndex];

    return `${currentName.firstName} ${currentName.lastName}`;
  }, [currentQuestionIndex]);

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setAnswer(event.currentTarget.value);
  };

  const handleSubmit = (): void => {
    if (answer === correctAnswer) {
      setIsCorrect(true);
      dispatch(setCurrentQuestionStatus(CurrentQuestionStatus.CORRECT));
      dispatch(addCorrectlyAnsweredName(answer));
    } else {
      setIsIncorrect(true);
      dispatch(setCurrentQuestionStatus(CurrentQuestionStatus.INCORRECT));
    }
  };

  const handleReset = (): void => {
    setIsCorrect(false);
    setIsIncorrect(false);
    setAnswer("");
    dispatch(resetCurrentQuestionStatus());
  };

  const handleNext = (): void => {
    handleReset();
    dispatch(incrementCurrentQuestionIndex());
  };

  return (
    <>
      <AnswerInput
        type="text"
        name="answer"
        onChange={(event) => handleChange(event)}
        value={answer}
      />
      {!isCorrect && !isIncorrect && (
        <SubmitButton
          type="submit"
          name="submit"
          isDisabled={isDisabled}
          onClick={() => (isDisabled ? {} : handleSubmit())}
        />
      )}
      {isCorrect && numberOfNames - 1 > currentQuestionIndex && (
        <OtherButton onClick={() => handleNext()}>Next? </OtherButton>
      )}
      {isIncorrect && (
        <OtherButton onClick={() => handleReset()}>Reset?</OtherButton>
      )}
      {isCorrect && numberOfNames - 1 === currentQuestionIndex && (
        <OtherButton onClick={() => dispatch(updateShouldShowLastScreen())}>
          {" "}
          Finish?{" "}
        </OtherButton>
      )}
    </>
  );
};

export default GameControls;
