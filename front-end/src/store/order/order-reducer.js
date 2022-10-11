import ORDER_ACTION_TYPES from './order-type';

export const ORDER_INITIAL_STATE = {
    orderItems: []
};

export const orderReducer = (state = ORDER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_ACTION_TYPES.SET_ORDER:
      return { ...state, orderItems: payload };
    default:
      return state;
  }
};