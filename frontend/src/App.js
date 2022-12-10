import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product-detail" element={<ProductDetailsPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailsPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route element={<ProtectedRoutesComponent/>}>
            <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
            <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route path="/user" element={<UserProfilePage />} />
          </Route>

          <Route path="*" element="Page not exists. Error 404."/>
          {/* <Route path="/cart" component={CartPage} /> used in previous version of react-router-dom */}
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
