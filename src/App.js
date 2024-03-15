import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
