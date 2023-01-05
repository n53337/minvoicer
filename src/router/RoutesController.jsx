import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Invoices from "../pages/invoices/Invoices";
import NewInvoice from "../pages/invoices/NewInvoice";
import Products from "../pages/products/Products";
import NewProduct from "../pages/products/NewProduct";
import Customers from "../pages/customers/Customers";
import NewCustomer from "../pages/customers/NewCustomer";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/404/NotFound";

const RoutesController = ({ auth }) => {
  const RequireAuth = ({ children, navTo = "/register", auth }) => {
    return auth ? children : <Navigate to={navTo} />;
  };

  return (
    <Routes>
      <Route path="/">
        {/* ---- Public Routes */}

        <Route index element={<Home />} />

        <Route path="register" element={<Register />} />

        <Route path="login" element={<Login />} />

        {/* ---- Protected Routes ---- */}

        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />

        <Route path="invoices">
          <Route
            index
            element={
              <RequireAuth>
                <Invoices />
              </RequireAuth>
            }
          />
          <Route
            path="new"
            element={
              <RequireAuth>
                <NewInvoice />
              </RequireAuth>
            }
          />
        </Route>

        <Route path="customers">
          <Route
            index
            element={
              <RequireAuth>
                <Customers />
              </RequireAuth>
            }
          />
          <Route
            path="new"
            element={
              <RequireAuth>
                <NewCustomer />
              </RequireAuth>
            }
          />
        </Route>

        <Route path="products">
          <Route
            index
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
          <Route
            path="new"
            element={
              <RequireAuth>
                <NewProduct />
              </RequireAuth>
            }
          />
        </Route>
      </Route>

      {/* ---- 404 ---- */}

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default RoutesController;
