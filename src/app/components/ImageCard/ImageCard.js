import React from 'react';
import styles from 'Components/ImageCard/Imagecard.module.css';
import Image from 'Components/Images/Image';

const ImageCard = ({ imageSrc, info }) => {
    return (
        <div>
            <Image src={imageSrc} />
            <div className={styles.text}>{info}</div>
        </div>
    );
};

export default ImageCard;
