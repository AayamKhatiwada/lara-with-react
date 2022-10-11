import ORDER_ACTION_TYPES from './order-type';

const addOrder = (orderItems, order) => {
    const existingCartItem = orderItems.find((cartItem) => cartItem.id === order.id)

    if (existingCartItem) {
        return orderItems.map((cartItem) => {
            return (
                cartItem.id === order.id
                    ? { ...cartItem, quantity: parseInt(cartItem.quantity) + parseInt(order.quantity) }
                    :
                    cartItem
            );
        });
    }

    return [...orderItems, { ...order, quantity: order.quantity }]
}

export const setOrder = (orderItems, order) => {
    const newOrder = (addOrder(orderItems, order));
    return {type: ORDER_ACTION_TYPES.SET_ORDER, payload: newOrder};
}

export const setTotal = (total, order) => {
    const totalPrice = total + order.quantity * order.price;
    return {type: ORDER_ACTION_TYPES.SET_TOTAL, payload: totalPrice};
}

export const clearTotal = () => {
    return { type: ORDER_ACTION_TYPES.SET_TOTAL, payload: 0 }
}

export const clearOrder = () => {
    return { type: ORDER_ACTION_TYPES.SET_ORDER, payload: [] }
}