import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/home.page/home';
import HeaderFooter from './routes/headerFooter/headerFooter';
import { useEffect } from 'react';
import { setCurrentProduct, setProductError } from './store/products/products-action';
import { useDispatch } from 'react-redux';
import Allproducts from './routes/all-products.page/all-products';
import CartPage from './routes/cart.page/cart.page';
import PaymentPage from './routes/payment.page/payment.page';
import LoginPage from './routes/login.page/login.page';
import RegisterPage from './routes/register.page/register.page';

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
          <Route path="payment" element={<PaymentPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
