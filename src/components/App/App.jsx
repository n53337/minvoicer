import "../../styles/App.css";
import { RouterProvider, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<h1>Home</h1>} />

        <Route path="register" element={<h1>register</h1>} />

        <Route path="login" element={<h1>login</h1>} />

        <Route path="dashboard" element={<h1>dashboard</h1>} />

        <Route path="profile" element={<h1>profile</h1>} />

        <Route path="invoices">
          <Route index element={<h1>invoices</h1>} />
          <Route path="new" element={<h1>new invoice</h1>} />
        </Route>

        <Route path="customers">
          <Route index element={<h1>customers</h1>} />
          <Route path="new" element={<h1>new customer</h1>} />
        </Route>

        <Route path="products">
          <Route index element={<h1>products</h1>} />
          <Route path="new" element={<h1>new product</h1>} />
        </Route>
      </Route>
      <Route path="*" element={"404"}></Route>
    </Routes>
  );
}

export default App;
