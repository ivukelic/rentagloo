import React from 'react';
import styles from './index.module.css';

const Title = ({ children, className }) => {
    return (
        <div className={`${styles.title} ${className || ''}`}>{children}</div>
    );
};

const Heading = ({ children, className }) => {
    return (
        <div className={`${styles.heading} ${className || ''}`}>{children}</div>
    );
};

const Lead = ({ children, className }) => {
    return (
        <div className={`${styles.lead} ${className || ''}`}>{children}</div>
    );
};

const Text = ({ children, className }) => {
    return (
        <div className={`${styles.text} ${className || ''}`}>{children}</div>
    );
};

const Quote = ({ children, className }) => {
    return (
        <div className={`${styles.quote} ${className || ''}`}>{children}</div>
    );
};

export { Title, Heading, Lead, Text, Quote };
