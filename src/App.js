import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<EmployeeForm />} />
      </Routes>
    </div>
  );
}
export default App;
