export interface Name {
  firstName: string;
  lastName: string;
  firstGlyph: string;
  lastGlyph: string;
  title: string;
}

export interface Game {
  names: Name[];
}

export enum CurrentQuestionStatus {
  CORRECT,
  INCORRECT,
}
