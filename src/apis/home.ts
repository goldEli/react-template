import urls from "@/urls";
import request from "@/utils/request";

export const getHomeList = async (params: API.Home.GetHomeList.Params) => {
  const res = await request.get<API.Home.GetHomeList.Result>(urls.getHomeList, {
    data: params,
  });
  return res
};
