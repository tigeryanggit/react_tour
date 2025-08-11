import {useState} from 'react';
import logo from "/src/assets/horse-icon.png";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

// import logo from "/src/assets/logo.png";

const Navbar = () => {

    const [isToggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggle);
    };


  return (

    <nav className="navbar">
        <div className="container navbar-flex">
            <img src={logo} alt="" className="logo"/>
            {/* <!-- desktop menu --> */}
            <div className="main-menu">
                <PageLinks groupName="menu-list" itemName="menu-item" />

            </div>

            <div className="icon-menu">
                <SocialLinks groupName="menu-list" />


            </div>
            {/* <!-- mobile menu --> */}
             <div className="mobile-menu">
                <div className="mobile-menu-toggle" onClick={handleToggle}> 
                    <i className="fa-solid fa-bars fa-2x"></i>
                </div>
                <div className={
                    isToggle ? "mobile-menu-items active":"mobile-menu-items"
                } >
                <PageLinks groupName="mobile-menu-list" itemName="mobile-menu-item" />

                </div>
             </div>
        </div>
    </nav>






  );
}

export default Navbar;