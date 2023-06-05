declare namespace API.Home {
  namespace GetHomeList {
    type Params = {
      id: string;
    };
    type Result = Model.Home.Item[];
  }
}
