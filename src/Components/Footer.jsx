import React from "react";
import logo from "../assets/logo1.png";
import linkedinn from "../assets/linkedinn.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footeroneContainer}>
                <img src={logo} alt="JustLiv Logo" className={styles.logo} />
                <p className={styles.social}>
                    {/* <FaInstagram className={styles.icon} />  */}
                    <img src={instagram}
                        alt="LinkedIn"
                        className={styles.linkedin}
                    /> Connect with us on Instagram ♡
                </p>
            </div>

            <div className={styles.footertwoContainer}>
                <div className={styles.links}>
                    <a href="/privacy-policy" className={styles.privac}>Privacy policy</a>
                    <br />
                    <br />
                    <a href="/accessibility" className={styles.accessb}>Accessibility Statement</a>
                </div>
                <div className={styles.socialIcons}>
                    <a href="https://www.linkedin.com/company/justliv" target="_blank" rel="noreferrer">
                        <img src={linkedinn}
                            alt="LinkedIn"
                            className={styles.linkedin}
                        />
                    </a>
                </div>
                <p className={styles.copyright}>© 2024 by JustLiv</p>
            </div>
        </footer>
    );
};

export default Footer;
