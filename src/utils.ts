import { Name } from "./sharedTypes";

export const getAllEmojis = (names: Name[]): string[] => {
  const emojis = names.reduce<string[]>((emojisArray: string[], name: Name) => {
    return [...emojisArray, ...name.firstGlyph.split("")];
  }, []);

  return emojis;
};
