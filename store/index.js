import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import { AsyncStorage } from "react-native";
import reducers from "../reducers";

// persist auth state
const config = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"]
};

const reducer = persistCombineReducers(config, reducers);

export default function configurationStore(initialState = {}) {
  const store = createStore(reducer, initialState, applyMiddleware(thunk));
  const persistor = persistStore(store);
  // persistor.purge();
  return { persistor, store };
}
