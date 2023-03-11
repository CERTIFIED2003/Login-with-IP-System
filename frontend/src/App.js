import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Signup />}/>
        <Route path="/student" element={<Student />}/>
        <Route path="/teacher" element={<Teacher />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;