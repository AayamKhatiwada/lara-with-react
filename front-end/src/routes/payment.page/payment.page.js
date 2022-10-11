import Payment from "../../components/payment/payment";
import { getTotal, selectOrder } from "../../store/order/order-selector";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../store/user/user-selector";

const PaymentPage = () => {

    const orderItems = useSelector(selectOrder);
    const total = useSelector(getTotal);
    const user = useSelector(selectCurrentUser);

    return (
        <>
            {
                orderItems && <Payment orderItems={orderItems} total={total} user={user}/>
            }
        </>
    );
}

export default PaymentPage;