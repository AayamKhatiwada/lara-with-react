import { combineReducers } from 'redux';
import { orderReducer } from './order/order-reducer';
import { productReducer } from './products/products-reducer';

export const rootReducer = combineReducers({
  products: productReducer,
  order: orderReducer,
});