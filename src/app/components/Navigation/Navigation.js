import React, { useEffect, useState } from 'react';
import Button from 'Components/Button/Button';
import styles from 'Components/Navigation/Navigation.module.css';
import { Link, useHistory } from 'react-router-dom';

const Navigation = () => {
    const history = useHistory();
    const [isHomePage, setIsHomePage] = useState(
        history.location.pathname === '/'
    );

    useEffect(() => {
        return history.listen((location) => {
            setIsHomePage(history.location.pathname === '/');
        });
    }, []);

    return (
        <div className={styles.nav}>
            <div>{!isHomePage && <Link to="/">Rentaglu</Link>}</div>
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
