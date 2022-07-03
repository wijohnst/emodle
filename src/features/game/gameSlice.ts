import { createSlice } from "@reduxjs/toolkit";

export interface GameState {
  currentQuestionIndex: number;
}

const initialState: GameState = {
  currentQuestionIndex: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    incrementCurrentQuestionIndex: (state) => {
      state.currentQuestionIndex++;
    },
  },
});

export default gameSlice.reducer;
