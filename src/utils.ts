import { Name } from "./sharedTypes";

export const getAllEmojis = (names: Name[]): string[] => {
  const emojis = names.reduce<string[]>((emojisArray: string[], name: Name) => {
    return [
      ...emojisArray,
      ...Array.from(name.firstGlyph),
      ...Array.from(name.lastGlyph),
    ];
  }, []);

  return emojis;
};

export const getShuffledNames = (names: Name[]): Name[] => {
  const namesCopy = [...names];
  let currentIndex = names.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [namesCopy[currentIndex], namesCopy[randomIndex]] = [
      namesCopy[randomIndex],
      namesCopy[currentIndex],
    ];
  }

  return namesCopy;
};
