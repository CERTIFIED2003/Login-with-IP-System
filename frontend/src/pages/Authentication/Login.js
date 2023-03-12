import * as Styles from "./LoginStyles";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import LoginDesktop from "../../components/Authentication/Desktop/LoginDesktop";
import LoginMobile from "../../components/Authentication/Mobile/LoginMobile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ loading, setLoading, setUserData }) => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const query1770px = useMediaQuery({
    query: "(max-width: 1770px)"
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authType, setAuthType] = useState("student");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length < 1) {
      alert("Enter your email address");
      return;
    }
    if (password.length < 1) {
      alert("Enter your password");
      return;
    }
    try {
      setLoading(true);
      const IP = await axios.get("https://api.ipify.org");
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,
        { 
          email, 
          password, 
          authType,
          IP: IP.data,
        }
      );

      if (!data) return;
      setUserData(data);
      localStorage.setItem("user", JSON.stringify(data));

      if (data.authType === "student") navigate("/student");
      if (data.authType === "teacher") navigate("/teacher");
    }
    catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <>
      {" "}
      {query1770px
        ? <LoginMobile
          setEmail={setEmail}
          setPassword={setPassword}
          authType={authType}
          setAuthType={setAuthType}
          handleSubmit={handleSubmit}
          loading={loading}
          Styles={Styles}
        />
        : <LoginDesktop
          setEmail={setEmail}
          setPassword={setPassword}
          setAuthType={setAuthType}
          handleSubmit={handleSubmit}
          loading={loading}
          click={click}
          handleClick={handleClick}
          Styles={Styles}
        />
      }
    </>
  )
}

export default Login