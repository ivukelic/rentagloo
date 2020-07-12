import React from 'react';
import Button from 'Components/Button/Button';
import styles from 'Components/Footer/Footer.module.css';
import Image from 'Components/Images/Image';
import { Link } from 'react-router-dom';
import Translation from 'Components/Translation/Translation';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <Link className={styles.logoText} to="/">
                    Rentagloo
                    <Image className={styles.logoIcon} src="logo_bw" />
                </Link>
                <div className={styles.column}>
                    <Translation id="company" />
                    <Link to="/about" className={styles.button}>
                        <Translation id="about" />
                    </Link>
                    <Link to="/contact" className={styles.button}>
                        <Translation id="contact" />
                    </Link>
                </div>
                <div className={styles.column}>
                    <Translation id="links" />
                    <Link to="ponts" className={styles.button}>
                        <Translation id="fpoints" />
                    </Link>
                    <Link to="/random" className={styles.button}>
                        <Translation id="random" />
                    </Link>
                </div>
                <div className={styles.icons}>
                    <a
                        className={styles.button}
                        href="https://github.com/ivukelic/rentagloo"
                    >
                        <Image className={styles.image} src="git" />
                    </a>
                    <a
                        className={styles.button}
                        href="https://www.linkedin.com/in/iva-vukelic-5985ba152/"
                    >
                        <Image className={styles.image} src="linkedin" />
                    </a>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.text}>Privacy policy</div>
                <div className={styles.text}>Cookies recipe</div>
            </div>
        </div>
    );
};

export default Footer;
