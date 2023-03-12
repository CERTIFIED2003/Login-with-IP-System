import { useNavigate } from "react-router-dom";
import "./styles.css";

const Administrator = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin's Page</h1>
      <button onClick={() => {
        handleLogout();
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  )
}

export default Administrator