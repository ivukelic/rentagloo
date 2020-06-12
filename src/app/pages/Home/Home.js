import React from 'react';
import styles from './Home.module.css';
import Image from '../../components/Images/Image';
import Button from '../../components/Button/Button';
import Feature from '../../components/Feature/Feature';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.caption}>RENTAGLOO YO</div>
                <div className={styles.text}>
                    Random gibberish just to fill the space
                </div>
                <Button className={styles.discover}>
                    Check dis shit out (Discover)
                </Button>
            </div>
            <div className={styles.bottom}>
                <Feature src="aurora" info="Random pile of text 1" />
                <Feature src="aurora" info="Random pile of text 2" />
                <Feature src="aurora" info="Random pile of text 3" />
            </div>
            <div className={styles.bottom}></div>
        </div>
    );
};

export default Home;
