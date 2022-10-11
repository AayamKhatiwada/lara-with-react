import PRODUCT_ACTION_TYPES from './products-type';

export const setCurrentProduct = (product) => ({type: PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCTS, payload: product});

export const setProductError = (error) => ({type: PRODUCT_ACTION_TYPES.SET_ERROR, payload: error});