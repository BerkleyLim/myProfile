import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import userReducer from "./action/user.js"
import masterHeaderReducer from "./action/masterHeader.js";


const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  whitelist: ["user", "masterHeader"]
  // blacklist -> 그것만 제외합니다
};

export const rootReducer = combineReducers({
  user:userReducer,
  masterHeader:masterHeaderReducer,
});

export default persistReducer(persistConfig, rootReducer);