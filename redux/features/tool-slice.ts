import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Initial = {
  sideBar: boolean;
};

const initialState = {
  sideBar: false,
} as Initial;

export const tool = createSlice({
  name: "tool",
  initialState,
  reducers: {
    setSideBar: (state, action: PayloadAction<boolean>) => {
      state.sideBar = action.payload;
    },
  },
});

export const { setSideBar } = tool.actions;
export default tool.reducer;
