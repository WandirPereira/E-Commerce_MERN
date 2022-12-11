import { BrowserRouter, Routes, Route } from "react-router-dom";
//components:
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

//publicly available pages:
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
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChartsPage from "./pages/admin/AdminChartsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

function App() {
  return (
    <BrowserRouter> 
      <HeaderComponent />
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product-detail" element={<ProductDetailsPage />} />
          <Route path="/product-detail/:id" element={<ProductDetailsPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route element={<ProtectedRoutesComponent  admin={false}/>}>
            <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
            <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route path="/user" element={<UserProfilePage />} />
          </Route>
 
          <Route element={<ProtectedRoutesComponent admin={true} />}>
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
            <Route path="/admin/charts" element={<AdminChartsPage />} />
            <Route path="/admin/create-product" element={<AdminCreateProductPage />} />
            <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
            <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
            <Route path="/admin/order-details" element={<AdminOrderDetailsPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route path="/admin/users" element={<AdminUsersPage />} />
          </Route>



          <Route path="*" element="Page not exists. Error 404."/>
          {/* <Route path="/cart" component={CartPage} /> used in previous version of react-router-dom */}
      </Routes>
      <FooterComponent />
    </BrowserRouter> 
  );
}

export default App;
