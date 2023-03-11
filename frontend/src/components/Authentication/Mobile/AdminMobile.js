import { Link } from "react-router-dom";

const AdminMobile = ({ setEmail, setPassword, handleSubmit, Styles, loading }) => {
  return (
    <div className="myDiv">
      <Styles.MainContainer>
        <Styles.WelcomeText>
          ADMIN LOGIN
        </Styles.WelcomeText>
        <Styles.InputContainer>
          <Styles.StyledInput
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Styles.StyledInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Styles.InputContainer>
        <Styles.ButtonContainer>
          <Styles.StyledButton disabled={loading} onClick={handleSubmit}>
            {loading
              ? <div className="loading-spinner" />
              : "SIGN IN"
            }
          </Styles.StyledButton>
        </Styles.ButtonContainer>
        <Styles.HorizontalRule />
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Styles.ForgotPassword>Not an Admin?</Styles.ForgotPassword>
        </Link>
      </Styles.MainContainer>
    </div>
  )
}

export default AdminMobile