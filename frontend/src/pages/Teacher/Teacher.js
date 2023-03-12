import { useNavigate } from "react-router-dom";
import "./styles.css";

const Teacher = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Teacher's Page</h1>
      <button onClick={() => {
        handleLogout();
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  )
}

export default Teacher