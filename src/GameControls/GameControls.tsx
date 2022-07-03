import React from "react";
import { AnswerInput, SubmitButton } from "./GameControls.style";

type Props = {};

const GameControls = (props: Props) => {
  const [answer, setAnswer] = React.useState<string | undefined>(undefined);

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    console.log(event.currentTarget.value);
  };
  return (
    <>
      <AnswerInput
        type="text"
        name="answer"
        onChange={(event) => handleChange(event)}
        value={answer}
      />
      <SubmitButton
        type="submit"
        name="submit"
        isDisabled={answer === undefined}
      />
    </>
  );
};

export default GameControls;
