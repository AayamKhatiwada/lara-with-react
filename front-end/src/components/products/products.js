import ProductCard from "../../components/productcard/productcard";
import { selectCurrentProducts } from "../../store/products/products-selector";
import { useSelector } from 'react-redux';

const Products = () => {

    const currentProducts = useSelector(selectCurrentProducts);

    return (
        <>
            <div className="d-flex flex-wrap mx-5 my-4 justify-content-between">
                {
                    (currentProducts ?? []).map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    );
}

export default Products;