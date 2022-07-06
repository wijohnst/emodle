import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CurrentQuestionStatus } from "../../sharedTypes";
export interface GameState {
  currentQuestionIndex: number;
  currentQuestionStatus: CurrentQuestionStatus | null;
  correctlyAnsweredNames: string[];
  isLastQuestion: boolean;
  shouldShowEndScreen: boolean;
  lifelinesUsed: string[];
  is5050Selected: boolean;
  isTitleLocationSelected: boolean;
}

const initialState: GameState = {
  currentQuestionIndex: 0,
  currentQuestionStatus: null,
  correctlyAnsweredNames: [],
  isLastQuestion: false,
  shouldShowEndScreen: false,
  lifelinesUsed: [],
  is5050Selected: false,
  isTitleLocationSelected: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    incrementCurrentQuestionIndex: (state) => {
      state.currentQuestionIndex++;
    },
    setCurrentQuestionStatus: (state, action) => {
      state.currentQuestionStatus = action.payload;
    },
    resetCurrentQuestionStatus: (state) => {
      state.currentQuestionStatus = initialState.currentQuestionStatus;
    },
    addCorrectlyAnsweredName: (state, action) => {
      state.correctlyAnsweredNames.push(action.payload);
    },
    updateIsLastQuestion: (state) => {
      state.isLastQuestion = !state.isLastQuestion;
    },
    updateShouldShowLastScreen: (state) => {
      state.shouldShowEndScreen = !state.shouldShowEndScreen;
    },
    updateLifelinesUsed: (state, action) => {
      state.lifelinesUsed.push(action.payload);
    },
    updateIs5050selected: (state, action) => {
      state.is5050Selected = action.payload;
    },
    updateIsTitleLocationSelected: (state, action) => {
      state.isTitleLocationSelected = action.payload;
    },
  },
});

export const {
  setCurrentQuestionStatus,
  resetCurrentQuestionStatus,
  addCorrectlyAnsweredName,
  incrementCurrentQuestionIndex,
  updateIsLastQuestion,
  updateShouldShowLastScreen,
  updateLifelinesUsed,
  updateIs5050selected,
  updateIsTitleLocationSelected,
} = gameSlice.actions;

export const selectCurrentQuestionIndex = (state: RootState) =>
  state.game.currentQuestionIndex;

export const selectCurrentQuestionStatus = (state: RootState) =>
  state.game.currentQuestionStatus;

export const selectCorrectlyAnsweredNames = (state: RootState) =>
  state.game.correctlyAnsweredNames;

export const selectIsLastQuestion = (state: RootState) =>
  state.game.isLastQuestion;

export const selectShouldShowLastScreen = (state: RootState) =>
  state.game.shouldShowEndScreen;

export const selectLifelinesUsed = (state: RootState) =>
  state.game.lifelinesUsed;

export const selectIs5050selected = (state: RootState) =>
  state.game.is5050Selected;

export const selectIsTitleLocationSelected = (state: RootState) =>
  state.game.isTitleLocationSelected;

export default gameSlice.reducer;
