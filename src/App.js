import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./pages/usersList/UsersList";
import User from "./pages/user/User";
import AddUser from "./pages/addUser/AddUser";
import ProductsList from "./pages/productsList/ProductsList";
import Product from "./pages/product/Product";
import AddProduct from "./pages/addProduct/AddProduct";
function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar className="sidebar" />

        <Routes>
          <Route exact path="/" element={<Home className="home" />} />
          <Route exact path="/users" element={<UsersList />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/products" element={<ProductsList />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
