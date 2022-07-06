import React from "react";

//@ts-ignore
import { FallingEmojis } from "falling-emojis";
import { getAllEmojis } from "../../utils";

import GameData from "../../game.json";

type Props = {};

const LastScreen = (props: Props) => {
  const allEmojis = getAllEmojis(GameData.names);
  return (
    <>
      {allEmojis.map((emoji) => (
        <FallingEmojis emoji={emoji} />
      ))}
    </>
  );
};

export default LastScreen;
