import { User } from "./User.model";
import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESSFUL,
  FETCH_USER_REJECTED,
  USER_LOGOUT
} from "./UserActions";

export interface UserState {
  user: User;
  isFetching: boolean;
  error: any;
}

interface FetchUserPending {
  type: typeof FETCH_USER_PENDING;
}

interface FetchUserSuccessful {
  type: typeof FETCH_USER_SUCCESSFUL;
  payload: User;
}

interface FetchUserSRejected {
  type: typeof FETCH_USER_REJECTED;
  payload: any;
}

interface UserLogout {
  type: typeof USER_LOGOUT;
}

type UserActionTypes =
  | FetchUserPending
  | FetchUserSuccessful
  | FetchUserSRejected
  | UserLogout;

export default function user(
  state: UserState = {
    user: {},
    isFetching: false,
    error: null
  },
  action: UserActionTypes
) {
  switch (action.type) {
    case FETCH_USER_PENDING: {
      return { ...state, isFetching: true };
    }

    case FETCH_USER_SUCCESSFUL: {
      return {
        ...state,
        isFetching: false,
        user: action.payload
      };
    }

    case FETCH_USER_REJECTED: {
      return { ...state, isFetching: false, error: action.payload };
    }

    case USER_LOGOUT: {
      return { ...state, user: {} };
    }

    default:
  }

  return state;
}
