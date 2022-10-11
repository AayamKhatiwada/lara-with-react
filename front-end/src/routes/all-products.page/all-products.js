import { Route, Routes } from "react-router-dom";
import Products from "../../components/products/products";
import ProductDetailPage from "../product-details.page/product-detail.page";

const Allproducts = () => {

    return (
        <Routes>
            <Route index element={<Products />} />
            <Route path=":slugPara" element={<ProductDetailPage />} />
        </Routes>
    );
}

export default Allproducts;