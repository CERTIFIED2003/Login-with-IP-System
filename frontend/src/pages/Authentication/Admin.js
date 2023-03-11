import AdminMobile from '../../components/Authentication/Mobile/AdminMobile';
import * as Styles from "./AdminStyles";
import { useMediaQuery } from "react-responsive";
import AdminDesktop from '../../components/Authentication/Desktop/AdminDesktop';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Admin = ({ loading, setLoading, setUserData }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const query1770px = useMediaQuery({
        query: "(max-width: 1770px)"
    });

    const handleSubmit = async (e) => {
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
            setLoading(true);
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,
                { email, password, authType: "admin" }
            );
            setUserData(data);

            if (data.authType === "admin") navigate("/administrator");
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            setLoading(false);
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
                    loading={loading}
                    Styles={Styles}
                />
                : <AdminDesktop
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    loading={loading}
                    click
                    Styles={Styles}
                />
            }
        </>
    )
}

export default Admin