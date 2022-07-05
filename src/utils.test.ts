import { getAllEmojis } from "./utils";
import GameData from "./game.json";

describe("getAllEmojis tests", () => {
  it("Should return the correct emojis", () => {
    const names = GameData.names;

    console.log(getAllEmojis(names));
  });
});
