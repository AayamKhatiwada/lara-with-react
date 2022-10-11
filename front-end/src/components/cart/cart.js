const Cart = ({ orderItems }) => {
    return (
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
                            <th scope="col">Delete All</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderItems.map((orderItem) => {

                                return (<tr key={orderItem.id}>
                                    <td>{orderItem.name}</td>
                                    <td>Null</td>
                                    <td>{orderItem.quantity}</td>
                                    <td>Null</td>
                                    <td>null</td>
                                    <td>Delete</td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
                <div className="btn btn-primary mb-2">Proceed</div>

            </div>
        </>
    );
}

export default Cart;