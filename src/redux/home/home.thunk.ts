import apis from "@/apis";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "..";

const name = "home";

export const getHomeList = createAsyncThunk(
  `${name}/getHomeList`,
  async (params: API.Home.GetHomeList.Params) => {
    const res = await apis.home.getHomeList(params);
    return res.data;
  }
);

export const init = () => async (dispatch: AppDispatch) => {
  await dispatch(getHomeList({ id: "123" }));
};
