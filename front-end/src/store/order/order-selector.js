export const selectOrder = (state) => {
    return state.order.orderItems;
};

export const getTotal = (state) => {
    return state.order.total;
};