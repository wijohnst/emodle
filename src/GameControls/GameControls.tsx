import React from "react";
import {
  AnswerInput,
  SubmitButton,
  OtherButton,
  FiftyFiftyLifeline,
  AnswerSubmit,
  LifelineName,
  Title,
} from "./GameControls.style";

import { useAppSelector, useAppDispatch } from "../app/hooks";

import {
  selectCurrentQuestionIndex,
  setCurrentQuestionStatus,
  resetCurrentQuestionStatus,
  addCorrectlyAnsweredName,
  incrementCurrentQuestionIndex,
  updateShouldShowLastScreen,
  selectIs5050selected,
  updateIs5050selected,
  selectCorrectlyAnsweredNames,
  selectIsTitleLocationSelected,
  updateIsTitleLocationSelected,
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
  const is5050Selected = useAppSelector(selectIs5050selected);
  const isTitleLocationSelected = useAppSelector(selectIsTitleLocationSelected);
  const answeredNames = useAppSelector(selectCorrectlyAnsweredNames);

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
    isIncorrect && event.currentTarget.value === "" && handleReset();
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
    dispatch(updateIs5050selected(false));
    dispatch(updateIsTitleLocationSelected(false));
  };

  const handleNext = (): void => {
    handleReset();
    dispatch(incrementCurrentQuestionIndex());
  };

  const getRandomName = (): string => {
    const correctName = `${GameData.names[currentQuestionIndex].firstName} ${GameData.names[currentQuestionIndex].lastName}`;
    const incorrectNames = GameData.names.filter((name) => {
      return (
        `${name.firstName} ${name.lastName}` !== correctName &&
        !answeredNames.includes(`${name.firstName} ${name.lastName}`)
      );
    });

    return `${incorrectNames[incorrectNames.length - 1].firstName} ${
      incorrectNames[incorrectNames.length - 1].lastName
    }`;
  };

  return (
    <>
      <AnswerSubmit>
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
      </AnswerSubmit>
      {is5050Selected && (
        <FiftyFiftyLifeline>
          <LifelineName>{`${GameData.names[currentQuestionIndex].firstName} ${GameData.names[currentQuestionIndex].lastName}`}</LifelineName>
          <LifelineName>{getRandomName()}</LifelineName>
        </FiftyFiftyLifeline>
      )}
      {isTitleLocationSelected && (
        <FiftyFiftyLifeline>
          <Title>{`${GameData.names[currentQuestionIndex].title}`}</Title>
        </FiftyFiftyLifeline>
      )}
    </>
  );
};

export default GameControls;
