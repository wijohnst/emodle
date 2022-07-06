import React from "react";

//@ts-ignore
import { getAllEmojis } from "../../utils";
import JSConfetti from "js-confetti";
import { Name } from "../../sharedTypes";

import GameData from "../../game.json";

import {
  LastScreenWrapper,
  NamesList,
  NameItem,
  NameSpan,
  TitleSpan,
  Subheading,
  Heading,
  EndingNote,
} from "./LastScreen.style";

type Props = {};

const LastScreen = (props: Props) => {
  const allEmojis = getAllEmojis(GameData.names);
  const jsConfettit = new JSConfetti();
  jsConfettit.addConfetti({
    emojis: [...allEmojis],
  });

  return (
    <LastScreenWrapper>
      <Heading>You did it!</Heading>
      <Subheading>Meet your team:</Subheading>
      <NamesList>
        {GameData.names.map((name: Name) => (
          <NameItem>
            <NameSpan>{`${name.firstName} ${name.lastName} -`}</NameSpan>
            <TitleSpan>{`${name.title}`}</TitleSpan>
          </NameItem>
        ))}
      </NamesList>
      <EndingNote>
        Andrew, We are so happy to have you on the team! We know you're going to
        do big things! - The Modern Apps UX Practice
      </EndingNote>
    </LastScreenWrapper>
  );
};

export default LastScreen;
