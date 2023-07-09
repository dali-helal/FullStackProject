import { Outlet } from "react-router-dom"
import SideBar from "../Components/SideBar";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
const PrivateLayout = () => {
    return (
        <>
            <section className="private-routes-section">
                <section className="left-section">
                    <SideBar />
                </section>
                <section className="rigth-section">
                    <Nav />
                    <section className="main-section">
                        <Outlet />
                    </section>
                    <Footer />
                </section>
            </section>

        </>);
}

export default PrivateLayout;