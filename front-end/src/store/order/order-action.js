import ORDER_ACTION_TYPES from './order-type';

export const setOrder = (order) => ({type: ORDER_ACTION_TYPES.SET_ORDER, payload: order});