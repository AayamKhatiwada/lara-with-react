import { combineReducers } from 'redux';
import { orderReducer } from './order/order-reducer';
import { productReducer } from './products/products-reducer';
import { userReducer } from './user/user-reducer'

export const rootReducer = combineReducers({
  products: productReducer,
  order: orderReducer,
  user: userReducer,
});