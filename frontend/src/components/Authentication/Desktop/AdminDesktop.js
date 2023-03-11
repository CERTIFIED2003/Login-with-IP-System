const AdminDesktop = ({ setEmail, setPassword, handleSubmit, click, Styles }) => {
    return (
        <Styles.BackgroundBox clicked={click}>
            <Styles.Form className="signup" onSubmit={handleSubmit}>
                <Styles.Title>Admin Login</Styles.Title>
                <Styles.Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Styles.Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Styles.Link href="/">
                    Not an Admin?
                </Styles.Link>
                <Styles.Button type="submit">Sign In</Styles.Button>
            </Styles.Form>

            <Styles.Text className="text2">
                <h1>Hi There!</h1>
                Sign In as Admin
                <br />
            </Styles.Text>

            <Styles.Box1 clicked={click} />
            <Styles.Box2 clicked={click} />
        </Styles.BackgroundBox>
    )
}

export default AdminDesktop