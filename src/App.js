import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Components/Login/Login";
import HomePage from './Components/Home/HomePage';
function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/login" element={ <Login />} />
          <Route path="/" element={ <HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
