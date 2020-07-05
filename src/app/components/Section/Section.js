import PropTypes from 'prop-types';
import React from 'react';
import styles from 'Components/Section/Section.module.css';

const Section = ({ children, className, backgroundClass, preset }) => {
    const presetClass = styles[preset] || '';

    return (
        <div className={`${backgroundClass} ${presetClass}`}>
            <div className={`${className} ${styles.section}`}>{children}</div>
        </div>
    );
};

Section.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    backgroundClass: PropTypes.string,
    prest: PropTypes.string,
};

Section.defaultProps = {
    children: null,
    className: '',
    backgroundClass: null,
    preset: 'default',
};

export default Section;
