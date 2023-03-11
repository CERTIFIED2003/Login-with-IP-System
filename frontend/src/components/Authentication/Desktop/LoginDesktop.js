const LoginDesktop = ({ setEmail, setPassword, handleSubmit, click, handleClick, Styles }) => {

    return (
        <body className="myBody">
            <Styles.BackgroundBox clicked={click}>
                <Styles.ButtonAnimate clicked={click} onClick={handleClick}></Styles.ButtonAnimate>

                {/* ---------------------- STUDENT ---------------------- */}
                <Styles.Form className="studentLogin" onSubmit={handleSubmit}>
                    <Styles.Title>Student Login</Styles.Title>
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
                    <Styles.Button type="submit">Sign In</Styles.Button>
                </Styles.Form>

                {/* ---------------------- TEACHER ---------------------- */}
                <Styles.Form className="teacherLogin" onSubmit={handleSubmit}>
                    <Styles.Title>Teacher Login</Styles.Title>
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
                    <Styles.Link href="/admin">
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
        </body>
    )
}

export default LoginDesktop