import AdminMobile from '../../components/Authentication/Mobile/AdminMobile';
import * as Styles from "./AdminStyles";
import { useMediaQuery } from "react-responsive";
import AdminDesktop from '../../components/Authentication/Desktop/AdminDesktop';
import { useState } from 'react';

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const query1770px = useMediaQuery({
        query: "(max-width: 1770px)"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length < 1) {
            alert("Enter your email address!");
            return;
        }
        if (password.length < 1) {
            alert("Enter your password!");
            return;
        }
        try {

        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {" "}
            {query1770px
                ? <AdminMobile
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    Styles={Styles}
                />
                : <AdminDesktop
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    click
                    Styles={Styles}
                />
            }
        </>
    )
}

export default Admin