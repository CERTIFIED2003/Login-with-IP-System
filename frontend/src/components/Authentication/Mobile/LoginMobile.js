import { Link } from "react-router-dom"

const LoginMobile = ({ setEmail, setPassword, authType, setAuthType, handleSubmit, loading, Styles }) => {
  return (
    <div className="myDiv">
      <Styles.MainContainer>
        <Styles.WelcomeText>Welcome</Styles.WelcomeText>
        <Styles.InputContainer>
          <Styles.StyledInput
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Styles.StyledInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styles.OptionsText>SIGN IN AS:</Styles.OptionsText>
          <Styles.CheckBoxContainer>
            <Styles.Space>
              <Styles.OptionsText>STUDENT</Styles.OptionsText>
              <input type='checkbox'
                checked={authType === "student"}
                onChange={() => setAuthType("student")}
              />
            </Styles.Space>

            <Styles.Space>
              <Styles.OptionsText>TEACHER</Styles.OptionsText>
              <input type='checkbox'
                checked={authType === "teacher"}
                onChange={() => setAuthType("teacher")}
              />
            </Styles.Space>
          </Styles.CheckBoxContainer>
        </Styles.InputContainer>
        <Styles.ButtonContainer>
          <Styles.StyledButton disabled={loading} type="submit" onClick={handleSubmit}>
            {loading
              ? <div className="loading-spinner" />
              : "SIGN IN"
            }
          </Styles.StyledButton>
        </Styles.ButtonContainer>
        <Styles.HorizontalRule />
        <Link to="/admin" style={{ textDecoration: "none", color: "inherit" }}>
          <Styles.ForgotPassword>Admin?</Styles.ForgotPassword>
        </Link>
      </Styles.MainContainer>
    </div>
  )
}

export default LoginMobile