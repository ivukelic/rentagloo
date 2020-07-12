import React from 'react';
import styles from './NotFound.module.css';
import { Title } from 'Components/Text';
import Image from 'Components/Images/Image';
import Section from 'Components/Section/Section';
import Translation from 'Components/Translation/Translation';

const NotFound = () => {
    return (
        <div>
            <Section className={styles.container} preset="dark-blue">
                <Title>
                    <Translation id="construction" />
                </Title>
                <Image className={styles.image} src="construction" />
            </Section>
        </div>
    );
};

export default NotFound;
