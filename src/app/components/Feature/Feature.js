import React from 'react';
import Image from 'Components/Images/Image';
import styles from 'Components/Feature/Feature.module.css';

const Feature = ({ src, info }) => {
    return (
        <div className={styles.container}>
            <Image src={src} className={styles.image} />
            <div className={styles.info}>{info}</div>
        </div>
    );
};

export default Feature;
