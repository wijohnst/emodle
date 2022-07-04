import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CurrentQuestionStatus } from "../../sharedTypes";
export interface GameState {
  currentQuestionIndex: number;
  currentQuestionStatus: CurrentQuestionStatus | null;
  correctlyAnsweredNames: string[];
  isLastQuestion: boolean;
  shouldShowEndScreen: boolean;
}

const initialState: GameState = {
  currentQuestionIndex: 0,
  currentQuestionStatus: null,
  correctlyAnsweredNames: [],
  isLastQuestion: false,
  shouldShowEndScreen: false,
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
  },
});

export const {
  setCurrentQuestionStatus,
  resetCurrentQuestionStatus,
  addCorrectlyAnsweredName,
  incrementCurrentQuestionIndex,
  updateIsLastQuestion,
  updateShouldShowLastScreen,
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

export default gameSlice.reducer;
