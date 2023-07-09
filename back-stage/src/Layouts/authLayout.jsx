import { Outlet } from "react-router-dom"
import illustration from "../assets/illustration.png"
const AuthLayout = () => {
    return (
        <>

            <section className="auth-layout">
                <div className="auth-outlet">
                    <Outlet />
                </div>
                <div className="illustration">
                    <img src={illustration} alt="" />
                </div>

            </section>

        </>);
}

export default AuthLayout;