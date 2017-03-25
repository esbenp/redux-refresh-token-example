import localStorage from "./localStorage";
import { SET_ACCESS_TOKEN } from "redux-refresh-token";
import { LOGOUT_REQUEST } from "./actions";

const LOCAL_STORAGE_KEY = "access_token";

const initialState = {
  access_token: null,
  expires_in: null
};

const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

export default function accessTokenReducer(
  state = storage || initialState,
  action
) {
  let data;

  switch (action.type) {
    case LOGOUT_REQUEST:
      localStorage.clear(LOCAL_STORAGE_KEY);

      return Object.assign({}, state, initialState);
    case SET_ACCESS_TOKEN:
      data = {
        access_token: action.access_token,
        expires_in: action.expires_in
      };

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

      return Object.assign({}, state, data);
    default:
      return state;
  }
}
