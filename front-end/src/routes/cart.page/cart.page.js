import Cart from "../../components/cart/cart";
import { getTotal, selectOrder } from "../../store/order/order-selector";
import { useSelector } from "react-redux";

const CartPage = () => {

    const orderItems = useSelector(selectOrder);
    const total = useSelector(getTotal);

    return (
        <>
            {
                orderItems && <Cart orderItems={orderItems} total={total} />
            }
        </>
    );
}

export default CartPage;