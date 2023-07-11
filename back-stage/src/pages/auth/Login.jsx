import { Button, TextField } from "@mui/material"
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/authContext";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setUser, setToken } = useStateContext()
    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: email,
            password: password,
        }

        axiosClient.post('/login', payload).then(({ data }) => {
            setToken(data.token)
            setUser(data.user)
        })
            .catch(err => {
                const response = err.response
                if (response && response.status === 422) {
                    console.log(response.data.errors)
                }
            })
    };


    return (
        <div className="login-form" >
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
                <div className="sign-up">
                    <div>
                        <h4>don't have an account ?</h4>
                        <Link to={"#"}>
                            <h5> Sign up!</h5>
                        </Link>
                    </div>
                </div>
                <div className="login-with">
                    <div id="login-with">
                        <hr />
                        <h6>or sign in with</h6>
                        <hr />
                    </div>
                </div>
                <div className="login-icons" >
                    <div className="icon-facebook">
                        <FaFacebookF className="icons-Facebook" size={"20"} />
                    </div>

                    <div className="icon-gmail">
                        <FaGoogle className="icons-ge" size={"20"} />
                    </div>
                    <div className="icon-twitter">
                        <FaTwitter className="icons-twitter" size={"20"} />
                    </div>

                </div>

            </form>
        </div>);
}

export default LoginPage;