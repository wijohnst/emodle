import React from "react";

//@ts-ignore
import { FallingEmojis } from "falling-emojis";

type Props = {};

const LastScreen = (props: Props) => {
  return (
    <>
      <FallingEmojis emoji="🎉" />
      <FallingEmojis emoji="🐔" />
      <span>Last Screen</span>
    </>
  );
};

export default LastScreen;
