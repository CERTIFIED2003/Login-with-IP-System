import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from './Components/Authentication/Authentication';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;