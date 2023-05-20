import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import HomePage from './Components/Home/HomePage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Client from './Components/Home/client/Client';
import Product from './Components/Home/client/page/product/Product';
import Register from './Components/Register/Register';

function App() {
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("token")

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/*" element={<Client />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
