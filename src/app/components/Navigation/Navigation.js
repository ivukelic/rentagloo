import React from 'react';
import Button from '../Button/Button';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div>
                <Button className={styles.logo}>Rentagloo</Button>
            </div>
            <div>
                <Button className={styles.navItem} to="/igloos">
                    Igloos
                </Button>

                <Button className={styles.navItem} to="/about">
                    About
                </Button>

                <Button className={styles.navItem} to="/contact">
                    Contact
                </Button>
            </div>
        </div>
    );
};

export default Navigation;
