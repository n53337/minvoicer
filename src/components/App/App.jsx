import "../../styles/App.css";
import { RouterProvider, Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Register from "../../pages/register/Register";
import Login from "../../pages/login/Login";
import Dashboard from "../../pages/dashboard/Dashboard";
import Invoices from "../../pages/invoices/Invoices";
import NewInvoice from "../../pages/invoices/NewInvoice";
import Products from "../../pages/products/Products";
import NewProduct from "../../pages/products/NewProduct";
import Customers from "../../pages/customers/Customers";
import NewCustomer from "../../pages/customers/NewCustomer";
import Profile from "../../pages/profile/Profile";
import NotFound from "../../pages/404/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />

        <Route path="register" element={<Register />} />

        <Route path="login" element={<Login />} />

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="profile" element={<Profile />} />

        <Route path="invoices">
          <Route index element={<Invoices />} />
          <Route path="new" element={<NewInvoice />} />
        </Route>

        <Route path="customers">
          <Route index element={<Customers />} />
          <Route path="new" element={<NewCustomer />} />
        </Route>

        <Route path="products">
          <Route index element={<Products />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
