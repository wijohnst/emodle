import React from "react";

import { LifelinesWrapper, Lifeline } from "./Lifelines.style";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import {
  selectLifelinesUsed,
  updateLifelinesUsed,
  updateIs5050selected,
  updateIsTitleLocationSelected,
  updateIsAllNamesModalShown,
} from "../features/game/gameSlice";

type Props = {};

const Lifelines = (props: Props) => {
  const lifelinesUsed = useAppSelector(selectLifelinesUsed);
  const dispatch = useAppDispatch();
  const LifelinesTextEnum = {
    PHONE: "Phone a Friend",
    FIFTYFIFTY: "50:50",
    TITLELOCATION: "Title / Location",
  };

  const handle5050Click = (): void => {
    dispatch(updateLifelinesUsed(LifelinesTextEnum.FIFTYFIFTY));
    dispatch(updateIs5050selected(true));
  };

  const handleTitleLocationClick = (): void => {
    dispatch(updateLifelinesUsed(LifelinesTextEnum.TITLELOCATION));
    dispatch(updateIsTitleLocationSelected(true));
  };

  return (
    <LifelinesWrapper>
      <span>Lifelines:</span>
      <Lifeline
        isUsed={false}
        onClick={() => dispatch(updateIsAllNamesModalShown(true))}
      >
        See all names
      </Lifeline>
      <Lifeline
        isUsed={lifelinesUsed.includes(LifelinesTextEnum.PHONE)}
        onClick={() =>
          lifelinesUsed.includes(LifelinesTextEnum.PHONE)
            ? {}
            : dispatch(updateLifelinesUsed("Phone a Friend"))
        }
      >
        Phone a Friend
      </Lifeline>
      <Lifeline
        isUsed={lifelinesUsed.includes(LifelinesTextEnum.FIFTYFIFTY)}
        onClick={() =>
          lifelinesUsed.includes(LifelinesTextEnum.FIFTYFIFTY)
            ? {}
            : handle5050Click()
        }
      >
        50:50
      </Lifeline>
      <Lifeline
        isUsed={lifelinesUsed.includes(LifelinesTextEnum.TITLELOCATION)}
        onClick={() =>
          lifelinesUsed.includes(LifelinesTextEnum.TITLELOCATION)
            ? {}
            : handleTitleLocationClick()
        }
      >
        Title
      </Lifeline>
    </LifelinesWrapper>
  );
};

export default Lifelines;
