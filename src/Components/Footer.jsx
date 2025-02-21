import React from "react";
import logo from "../assets/logo1.png";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="JustLiv Logo" className={styles.logo} />
            <p className={styles.social}>
                {/* <FaInstagram className={styles.icon} />  */}
                Connect with us on Instagram ♡
            </p>
            <div className={styles.links}>
                <a href="/privacy-policy">Privacy policy</a>
                <a href="/accessibility">Accessibility Statement</a>
            </div>
            <div className={styles.socialIcons}>
                {/* <FaLinkedin className={styles.icon} /> */}
            </div>
            <p className={styles.copyright}>© 2024 by JustLiv</p>
        </footer>
    );
};

export default Footer;
