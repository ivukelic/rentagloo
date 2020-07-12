import React from 'react';
import styles from './NotFound.module.css';
import Image from 'Components/Images/Image';
import Section from 'Components/Section/Section';
import Chapter from 'Components/Chapter/Chapter';

const NotFound = () => {
    return (
        <div>
            <Section className={styles.container} preset="dark-blue">
                <Chapter
                    title="notAvailable"
                    heading="construction"
                    preset="violet"
                />
                <br />
                <Image className={styles.image} src="construction" />
            </Section>
        </div>
    );
};

export default NotFound;
