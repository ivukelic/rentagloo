import React from 'react';
import styles from './Styleguide.module.css';
import { Title, Heading, Lead, Text } from 'Components/Text';
import Section from 'Components/Section/Section';
import CollapseList from 'Components/CollapseList/CollapseList';

const Stylesguide = () => {
    const data = [{}, {}, {}, {}];

    return (
        <div>
            <Section className={styles.bob}>
                <CollapseList collapseData={data} startIndex={1} />
            </Section>
        </div>
    );
};

export default Stylesguide;
