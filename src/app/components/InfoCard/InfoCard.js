import React from 'react';

import Image from 'Components/Images/Image';
import styles from './InfoCard.module.css';

const InfoCard = ({ imgSrc, imgClass, children, isFlipped }) => {
    return (
        <div
            className={`${styles.infoCard} ${
                isFlipped ? styles.isFlipped : ''
            }`}
        >
            <Image src={imgSrc} className={imgClass} />
            <div>{children}</div>
        </div>
    );
};

export default InfoCard;
