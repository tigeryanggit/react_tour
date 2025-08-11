import React from 'react';
import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";

function Footer() {
  return (
    <footer className="footer">
            
            <PageLinks groupName="menu-list" itemName="menu-item" />

            <SocialLinks groupName="menu-list" />

        <p>Copyright &copy; <span id="date">{new Date().getFullYear()}</span> All Rights Reserved</p>
    </footer>
  );
}

export default Footer;