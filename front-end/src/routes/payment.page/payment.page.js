import Payment from "../../components/payment/payment";
import { selectOrder } from "../../store/order/order-selector";
import { useSelector } from 'react-redux';

const PaymentPage = () => {

    const orderItems = useSelector(selectOrder);

    return (
        <>
            {
                orderItems && <Payment orderItems={orderItems} />
            }
        </>
    );
}

export default PaymentPage;