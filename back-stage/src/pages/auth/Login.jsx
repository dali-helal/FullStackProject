import { Stack, Button, TextField, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const LoginPage = () => {
    return (
        <div className="login-form">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <form className="form-container">
                <TextField label="Email" type="email" />
                <TextField label="Password" type="password" />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                       // value={age}
                        label="Role"
                      //  onChange={handleChange}
                    >
                        <MenuItem value={10}>Super Admin</MenuItem>
                        <MenuItem value={20}>Admin</MenuItem>
                    </Select>
                </FormControl>
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