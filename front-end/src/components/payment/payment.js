const Payment = ({ orderItems, total }) => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 p-2">
                        <div>
                            <a href="/login">Login</a>
                        </div>
                        OR
                        <form action="/delivery-form/submit-order" method="POST">

                            <div className="mb-3 mt-3">
                                <label htmlFor="name" className="form-label">User Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter user name"
                                    name="name" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter email"
                                    name="email" />
                            </div>
                            <h5>
                                <div className="d-block">
                                    Hello,
                                </div>
                                <div className="d-block ms-5">

                                </div>
                            </h5>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address:</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter user address"
                                    name="address" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneno" className="form-label">Phone number:</label>
                                <input type="text" className="form-control" id="phoneno" placeholder="Enter user phoneno"
                                    name="phoneno" />
                            </div>
                            <button type="submit" className="btn btn-primary mb-5">Submit</button>
                        </form>
                    </div>
                    <div className="col-sm-6">
                        <h3 className="m-3">Cart</h3>
                        <div className="row my-3 mx-1 px-2">
                            <div className="col-5">Name:</div>
                            <div className="col-3">Quantity:</div>
                            <div className="col-2">Price:</div>
                            <div className="col-2">Total:</div>
                        </div>

                        {
                            orderItems.map((orderItem) => {
                                return (
                                    <div className="row bg-primary rounded-3 my-3 mx-1 text-white px-2 py-2" key={orderItem.id}>
                                        <div className="col-5">{ orderItem.name }</div>
                                        <div className="col-3">{ orderItem.quantity }</div>
                                        <div className="col-2">${ orderItem.price }</div>
                                        <div className="col-2">${ orderItem.price * orderItem.quantity }</div>
                                    </div>
                                );
                            })
                        }

                        <div className="row bg-danger rounded-3 my-3 mx-1 text-white px-2 py-2">
                            <div className="col-10">Total</div>
                            <div className="col-2">${ total }</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;