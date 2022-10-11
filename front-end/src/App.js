import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/home.page/home';
import HeaderFooter from './routes/headerFooter/headerFooter';
import { useEffect } from 'react';
import { setCurrentProduct, setProductError } from './store/products/products-action';
import { useDispatch } from 'react-redux';
import Allproducts from './routes/all-products.page/all-products';
import CartPage from './routes/cart.page/cart.page';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(setCurrentProduct(result));
        },
        (error) => {
          dispatch(setProductError(error));
        }
      )
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route index element={<Home />} />
          <Route path="products/*" element={<Allproducts />} />
          {/* <Route path="auth" element={<Authentication />} /> */}
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
