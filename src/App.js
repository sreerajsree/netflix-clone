import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from './components/ProtectedRoute'
import WaterMark from "./components/WaterMark";

function App() {
  return (
    <>
      <AuthContextProvider>
        <WaterMark/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
