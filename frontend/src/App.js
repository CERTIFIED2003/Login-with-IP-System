import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Authentication/Login';
import Admin from './pages/Authentication/Admin';
import Administrator from "./pages/Administrator/Administrator";
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';
import "./App.css";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login userData={userData} setUserData={setUserData} />} exact />
        <Route path="/admin" element={<Admin userData={userData} setUserData={setUserData} />} exact />
        <Route path="/administrator" element={<Administrator />} exact />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;