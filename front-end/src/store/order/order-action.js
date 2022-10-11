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