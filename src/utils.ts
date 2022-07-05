import { Name } from "./sharedTypes";

export const getAllEmojis = (names: Name[]): string[] => {
  return names.reduce((name: Name, emojis: string[]) => {
    return [...emojis, ...name.firstGlyph.split("")];
  }, []);
};
