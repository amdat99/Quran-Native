import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";

import pageReducer from "./page/page.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["page", "user"],
};

const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
