import React from "react";
import { Name } from "../../sharedTypes";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  AllNamesModalWrapper,
  CloseWrapper,
  ListName,
} from "./AllNamesModal.style";

import {
  updateIsAllNamesModalShown,
  selectCorrectlyAnsweredNames,
} from "../../features/game/gameSlice";

type Props = {
  shuffledNames: Name[];
};

const AllNamesModal = ({ shuffledNames }: Props) => {
  const dispatch = useAppDispatch();
  const correctlyAnsweredNames = useAppSelector(selectCorrectlyAnsweredNames);
  return (
    <AllNamesModalWrapper>
      <CloseWrapper onClick={() => dispatch(updateIsAllNamesModalShown(false))}>
        x
      </CloseWrapper>
      <span>All Names</span>
      <ul>
        {shuffledNames.map((name: Name) => {
          const fullName = `${name.firstName} ${name.lastName}`;
          return (
            <ListName isAnswered={correctlyAnsweredNames.includes(fullName)}>
              {fullName}
            </ListName>
          );
        })}
      </ul>
    </AllNamesModalWrapper>
  );
};

export default AllNamesModal;
