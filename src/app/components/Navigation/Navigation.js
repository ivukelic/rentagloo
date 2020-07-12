import React, { useEffect, useState } from 'react';
import styles from 'Components/Navigation/Navigation.module.css';
import Image from 'Components/Images/Image';
import Translation from 'Components/Translation/Translation';

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
            <div className={styles.logo}>
                {!isHomePage && (
                    <div className={styles.arrange}>
                        <Link className={styles.navItem} to="/">
                            Rentagloo
                            <Image src="logo" className={styles.image} />
                        </Link>
                    </div>
                )}
            </div>
            <div className={styles.container}>
                <Link className={styles.navItem} to="/igloos">
                    <Translation id="igloos" />
                </Link>
                <Link className={styles.navItem} to="/about">
                    <Translation id="about" />
                </Link>
                <Link className={styles.navItem} to="/contact">
                    <Translation id="contact" />
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
