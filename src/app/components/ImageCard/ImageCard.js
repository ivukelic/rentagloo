import React from 'react';
import styles from 'Components/ImageCard/Imagecard.module.css';
import Image from 'Components/Images/Image';
import Translation from '../Translation/Translation';
import { Text } from 'Components/Text';

const ImageCard = ({ imageSrc, info }) => {
    return (
        <div className={styles.container}>
            <Image src={imageSrc} />
            <div className={styles.text}>
                <Text>
                    <Translation id={info} />
                </Text>
            </div>
        </div>
    );
};

export default ImageCard;
