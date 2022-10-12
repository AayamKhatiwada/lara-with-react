import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearOrder, removeItemFromOrder } from '../../store/order/order-action';
import { Nothing } from './cart.style';

const Cart = ({ orderItems }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeRoute = () => {
        navigate("/payment");
    }

    const deleteOrder = (orderItem) => {
        dispatch(removeItemFromOrder(orderItems, orderItem));
    }

    const removeAll = () => {
        dispatch(clearOrder());
    }

    return (
        <>
            {
                orderItems.length !== 0 ? (
                    <>
                        <div className="container my-5">
                            <h1>Your Cart</h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Catagory</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price per piece</th>
                                        <th scope="col">Total price</th>
                                        <th scope="col"><div className="btn btn-primary" onClick={removeAll}>Delete All</div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderItems.map((orderItem) => {

                                            return (<tr key={orderItem.id}>
                                                <td>{orderItem.name}</td>
                                                <td>{orderItem.catagory}</td>
                                                <td>{orderItem.quantity}</td>
                                                <td>{orderItem.price}</td>
                                                <td>{orderItem.price * orderItem.quantity}</td>
                                                <td><div className="btn btn-primary mb-2" onClick={(e) => deleteOrder(orderItem)}>Delete</div></td>
                                            </tr>)
                                        })
                                    }

                                </tbody>
                            </table>
                            <div className="btn btn-primary mb-2" onClick={changeRoute}>Proceed</div>
                        </div>
                    </>
                ) :
                    (
                        <Nothing>
                            <h1 className="d-flex justify-content-center align-items-center">There is nothing in the cart</h1>
                        </Nothing>
                    )
            }
        </>
    );
}

export default Cart;