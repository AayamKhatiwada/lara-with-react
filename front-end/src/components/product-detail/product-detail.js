import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOrder } from '../../store/order/order-action';
import { useNavigate } from 'react-router-dom';

const ProductDetail = ({ product }) => {

    const navigate = useNavigate();
    const { id, name, catagory, price, img_src, description } = product

    const [quantity, setQuantity] = useState(1);
    const quantityInput = (e) => {
        setQuantity(e.target.value);
    }
    
    const dispatch = useDispatch();
    const orderInput = () => {
        dispatch(setOrder([{'id': id, 'name': name, 'price': price, 'quantity': quantity}]));
        navigate("/cart");
        // console.log({'name': name, 'price': price, 'quantity': quantity});
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={img_src} width="100%"
                                height="100%" className="rounded-5" /> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mt-4 mb-3"> <span className="brand">{catagory}</span>
                            <h5 className="text-uppercase">{name}</h5>
                            <div className="price d-flex flex-row align-items-center"> <span className="act-price">Price:
                                ${price}</span>
                            </div>
                        </div>
                        <p className="about">{description}</p>
                        <button type="submit" className="btn btn-primary mr-2 px-3 me-5" onClick={orderInput}>Add to cart</button>
                        <span>Quantity: </span>
                        <input type="number" id="quantity" name="quantity" min="1" max="100" value={quantity} onChange={e => quantityInput(e)}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;