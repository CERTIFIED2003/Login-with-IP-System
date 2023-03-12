import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Authentication/Login';
import Admin from './pages/Authentication/Admin';
import Administrator from "./pages/Administrator/Administrator";
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}`);
    }
    onLoad();
  }, []);

  console.log(userData);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUserData={setUserData} loading={loading} setLoading={setLoading} />} exact />
          <Route path="/admin" element={<Admin setUserData={setUserData} loading={loading} setLoading={setLoading} />} exact />
          <Route path="/administrator" element={<Administrator />} exact />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;