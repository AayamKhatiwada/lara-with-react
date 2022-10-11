import Payment from "../../components/payment/payment";
import { getTotal, selectOrder } from "../../store/order/order-selector";
import { useSelector } from 'react-redux';

const PaymentPage = () => {

    const orderItems = useSelector(selectOrder);
    const total = useSelector(getTotal);

    return (
        <>
            {
                orderItems && <Payment orderItems={orderItems} total={total} />
            }
        </>
    );
}

export default PaymentPage;