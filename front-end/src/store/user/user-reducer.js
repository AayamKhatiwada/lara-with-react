import USER_ACTION_TYPES from './user-type';

export const USER_INITIAL_STATE = {
  currentUser: [],
  error: [],
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SET_USER_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};