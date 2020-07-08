import React from 'react';
import Image from 'Components/Images/Image';
import styles from 'Components/Feature/Feature.module.css';
import Translation from '../Translation/Translation';

const Feature = ({ src, info }) => {
    return (
        <div className={styles.container}>
            <Image src={src} className={styles.image} />
            <div className={styles.info}>
                <Translation id={info} />
            </div>
        </div>
    );
};

export default Feature;
