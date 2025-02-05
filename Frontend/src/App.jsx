import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="user/login" element={<Login />}></Route>
        <Route path="user/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
