import { UPDATE_LOADER, UPDATE_USERNAME } from "../actions/user";
import { combineReducers } from "redux";
const user = (user = { username: "" }, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { username: action.username };
    default:
      return user;
  }
};
const loader = (loader = { isLoader: false }, action) => {
  switch (action.type) {
    case UPDATE_LOADER:
      return { isLoader: action.loader?.isLoader };
    default:
      return loader;
  }
};

export default combineReducers({ user, loader });
