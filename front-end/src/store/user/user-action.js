import USER_ACTION_TYPES from './user-type';

export const setCurrentUser = (user) => ({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});

export const removeUser = () => ({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: null});

export const setUserError = (error) => ({type: USER_ACTION_TYPES.SET_USER_ERROR, payload: error});