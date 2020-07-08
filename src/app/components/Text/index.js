import React from 'react';
import styles from './index.module.css';

const Title = ({ children }) => {
    return <div className={styles.title}>{children}</div>;
};

const Heading = ({ children }) => {
    return <div className={styles.heading}>{children}</div>;
};

const Lead = ({ children }) => {
    return <div className={styles.lead}>{children}</div>;
};

const Text = ({ children }) => {
    return <div className={styles.text}>{children}</div>;
};

const Quote = ({ children }) => {
    return <div className={styles.quote}>{children}</div>;
};

export { Title, Heading, Lead, Text, Quote };
