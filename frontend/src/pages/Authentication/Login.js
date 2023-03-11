import "./style.css";
import * as Styles from "./LoginStyles";
import { useState } from "react";

const Login = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {" "}
      <Styles.BackgroundBox clicked={click}>
        <Styles.ButtonAnimate clicked={click} onClick={handleClick}></Styles.ButtonAnimate>

        {/* ---------------------- STUDENT ---------------------- */}
        <Styles.Form className="studentLogin">
          <Styles.Title>Student Login</Styles.Title>
          <Styles.Input type="email" name="email" id="emailId" placeholder="Email" />
          <Styles.Input
            type="password"
            name="password"
            id="passwordId"
            placeholder="Password"
          />
          {/* <Styles.Link href="#">Forgot Your Password?</Link> */}
          <Styles.Button>Sign In</Styles.Button>
        </Styles.Form>

        {/* ---------------------- TEACHER ---------------------- */}
        <Styles.Form className="teacherLogin">
          <Styles.Title>Teacher Login</Styles.Title>
          <Styles.Input type="email" name="email" id="emailId" placeholder="Email" />
          <Styles.Input
            type="password"
            name="password"
            id="passwordId"
            placeholder="Password"
          />
          <Styles.Link href="/register">
            Not a Teacher?
          </Styles.Link>
          <Styles.Button>Sign In</Styles.Button>
        </Styles.Form>



        {/* ---------------------- STUDENT DISPLAY ---------------------- */}
        <Styles.Text className="text1" clicked={click}>
          <h1>Welcome!</h1>
          Connect with Institution's WiFi!
          <br />
          <span className="attention">Teacher? Click here</span>
          <span className="attention-icon">⤶</span>
        </Styles.Text>

        {/* ---------------------- TEACHER DISPLAY ---------------------- */}
        <Styles.Text className="text2" clicked={click}>
          <h1>Hi There!</h1>
          Sign In to view student's status
          <br />
          <span className="attention">Student? Click here</span>
          <span className="attention-icon">⤷</span>
        </Styles.Text>

        <Styles.Box1 clicked={click} />
        <Styles.Box2 clicked={click} />
      </Styles.BackgroundBox>
    </>
  )
}

export default Login