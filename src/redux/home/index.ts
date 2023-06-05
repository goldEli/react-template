// Part 1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getHomeList } from "./home.thunk";

// Part 2
export interface HomeInitialState {
  list: Model.Home.Item[];
  visible?: boolean;
}
const initialState: HomeInitialState = {
  list: [],
};

// Part 3
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setVisible: (state, action: PayloadAction<HomeInitialState["visible"]>) => {
      state.visible = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getHomeList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

// Part 4
export const { setVisible } = homeSlice.actions;
export default homeSlice.reducer;
