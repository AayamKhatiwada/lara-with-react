import PRODUCTS_ACTION_TYPES from './products-type';

export const PRODUCTS_INITIAL_STATE = {
  currentProducts: [],
  error: [],
};

export const productReducer = (state = PRODUCTS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.SET_CURRENT_PRODUCTS:
      return { ...state, currentProducts: payload };
    case PRODUCTS_ACTION_TYPES.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};