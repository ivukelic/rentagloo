import React from 'react';
import Button from 'Components/Button/Button';
import styles from 'Components/Navigation/Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className={styles.nav}>
            {/* <div>
                <Button className={styles.logo}>Rentagloo</Button>
            </div> */}
            <div className={styles.container}>
                <Link className={styles.navItem} to="/igloos">
                    Igloos
                </Link>

                <Link className={styles.navItem} to="/about">
                    About
                </Link>

                <Button className={styles.navItem} to="/contact">
                    Contact
                </Button>
            </div>
        </div>
    );
};

export default Navigation;
