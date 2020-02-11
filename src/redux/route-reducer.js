import { combinedReducer } from "redux";

import userReducer from "./user/user.reducer";


export default combinedReducer({
  user: userReducer
});
