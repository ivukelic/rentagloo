import React from 'react';
import Button from '../Button/Button';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.nav}>
            <div>
                <Button to="/igloos">Igloos</Button>
            </div>
            <div>
                <Button to="/about">About</Button>
            </div>
            <div>
                <Button to="/contact">Contact</Button>
            </div>
        </div>
    );
};

export default Navigation;
