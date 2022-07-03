import React from "react";
import { AnswerInput, SubmitButton } from "./GameControls.style";

type Props = {};

const GameControls = (props: Props) => {
  const [answer, setAnswer] = React.useState<string | undefined>("");

  const isDisabled = React.useMemo(() => {
    return answer === "";
  }, [answer]);

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setAnswer(event.currentTarget.value);
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
        isDisabled={isDisabled}
        onClick={() => (isDisabled ? {} : console.log("Submission!"))}
      />
    </>
  );
};

export default GameControls;
