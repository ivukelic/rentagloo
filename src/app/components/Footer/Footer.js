import React from 'react';
import Button from 'Components/Button/Button';
import styles from 'Components/Footer/Footer.module.css';
import Image from 'Components/Images/Image';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.logo}>Rentagloo</div>
                <div className={styles.column}>
                    Company
                    <Button className={styles.button}>About</Button>
                    <Button className={styles.button}>Contact</Button>
                </div>
                <div className={styles.column}>
                    Useful links
                    <Button className={styles.button}>Fish points</Button>
                    <Button className={styles.button}>Radndom</Button>
                </div>
                <div className={styles.icons}>
                    <Button className={styles.button}>
                        <Image className={styles.image} src="git" />
                    </Button>
                    <Button className={styles.button}>Lonkdin</Button>
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
