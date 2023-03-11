import * as Styles from "./LoginStyles";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import LoginDesktop from "../../components/Authentication/Desktop/LoginDesktop";
import LoginMobile from "../../components/Authentication/Mobile/LoginMobile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ userData, setUserData }) => {
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
    if (click) {
      setAuthType("student");
    }
    else {
      setAuthType("teacher")
    }
    if (email.length < 1) {
      alert("Enter your email address");
      return;
    }
    if (password.length < 1) {
      alert("Enter your password");
      return;
    }
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,
        { email, password, authType }
      );
      if (!data) return;
      setUserData(data);

      if (data.authType === "student") navigate("/student");
      if (data.authType === "teacher") navigate("/teacher");
    }
    catch (error) {
      console.log(error.message);
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
          Styles={Styles}
        />
        : <LoginDesktop
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          click={click}
          handleClick={handleClick}
          Styles={Styles}
        />
      }
    </>
  )
}

export default Login