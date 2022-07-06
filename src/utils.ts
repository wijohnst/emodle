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
