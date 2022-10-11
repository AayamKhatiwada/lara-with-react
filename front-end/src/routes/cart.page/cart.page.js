import Cart from "../../components/cart/cart";
import { selectOrder } from "../../store/order/order-selector";
import { useSelector } from "react-redux";

const CartPage = () => {

    const orderItems = useSelector(selectOrder);
    console.log(orderItems)

    return (
        <>
            {
                orderItems && <Cart orderItems={orderItems} />
            }
        </>
    );
}

export default CartPage;