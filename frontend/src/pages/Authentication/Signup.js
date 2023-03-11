import * as Styles from './SignupStyles';

const Signup = () => {
    const click = true;
    return (
        <>
            {" "}
            <Styles.BackgroundBox clicked={click}>
                <Styles.Form className="signup">
                    <Styles.Title>Registration</Styles.Title>
                    <Styles.Input type="email" name="email" id="emailId" placeholder="Email" />
                    <Styles.Input
                        type="password"
                        name="password"
                        id="passwordId"
                        placeholder="Password"
                    />
                    <Styles.Link href="/">
                        Already have an Account?
                    </Styles.Link>
                    <Styles.Button>Sign Up</Styles.Button>
                </Styles.Form>

                <Styles.Text className="text2">
                    <h1>Hi There!</h1>
                    Create your teacher's account
                    <br />
                </Styles.Text>

                <Styles.Box1 clicked={click} />
                <Styles.Box2 clicked={click} />
            </Styles.BackgroundBox>
        </>
    )
}

export default Signup