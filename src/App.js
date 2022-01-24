import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./pages/usersList/UsersList";
import User from "./pages/user/User";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
