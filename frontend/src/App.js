import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Authentication/Login';
import Admin from './pages/Authentication/Admin';
import Administrator from "./pages/Administrator/Administrator";
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}`);
    }
    onLoad();
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserData(foundUser);
    }
  }, []);

  const handleLogout = () => {
    setUserData();
    localStorage.clear();
  }

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="*" element={<NotFound />} exact />

          <Route path="/" element={
            userData?.authType === "student" ? <Student handleLogout={handleLogout} />
              : userData?.authType === "teacher" ? <Teacher handleLogout={handleLogout} />
                : userData?.authType === "admin" ? <Administrator handleLogout={handleLogout} />
                  : <Login setUserData={setUserData} loading={loading} setLoading={setLoading} />
          } />

          <Route path="/admin" element={
            <Admin setUserData={setUserData} loading={loading} setLoading={setLoading} />
          } />

          {userData?.authType === "admin" && userData.email !== "" && <Route path="/administrator" element={
            <Administrator handleLogout={handleLogout} />
          } />}

          {userData?.authType === "student" && userData.email !== "" && <Route path="/student" element={
            <Student handleLogout={handleLogout} />
          } />}

          {userData?.authType === "teacher" && userData.email !== "" && <Route path="/teacher" element={
            <Teacher handleLogout={handleLogout} />
          } />}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;