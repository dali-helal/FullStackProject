import { FaDashcube, FaUserFriends, FaInfoCircle } from 'react-icons/fa';
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
const SideBar = () => {
    return (

        <div className="sidebar">

            <div className="sidebar-header">
                <div className="sidebar-log">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="sidebar-links">

                <Link to={"/dashboard"}  className='link'>
                    <FaDashcube size={18} className='link-icons' />
                    <h4>Dashbord</h4>
                </Link>

                <Link to={"/users"}  className='link'>
                    <FaUserFriends size={18} className='link-icons' />
                    <h4>Users</h4>
                </Link>

                <Link to={"/computers"}  className='link'>
                    <FaInfoCircle size={18} className='link-icons' />
                    <h4>Computers</h4>
                </Link>
         
            </div>

        </div>
    );
}

export default SideBar;