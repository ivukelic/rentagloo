import React from 'react';

import Translation from 'Components/Translation/Translation';
import { Title, Heading } from 'Components/Text';

import styles from './Chapter.module.css';

const Chapter = ({ title, heading, preset }) => {
    const presetClass = styles[preset] || '';

    return (
        <div className={presetClass}>
            <Title>
                <Translation id={title} />
            </Title>
            <Heading>
                <Translation id={heading} />
            </Heading>
        </div>
    );
};

export default Chapter;
