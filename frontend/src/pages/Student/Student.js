import { useNavigate } from "react-router-dom";
import "./styles.css";

const Student = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Student's Page</h1>
      <button onClick={() => {
        handleLogout();
        navigate("/");
      }}>
        Logout
      </button>
    </div>
  )
}

export default Student