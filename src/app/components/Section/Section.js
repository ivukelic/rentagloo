import PropTypes from 'prop-types';
import React from 'react';
import styles from 'Components/Section/Section.module.css';

const Section = ({ children, className }) => {
    return (
        <div className={className}>
            <div className={styles.section}>{children}</div>
        </div>
    );
};

Section.propTypes = {
    children: PropTypes.node,
    className: PropTypes.className,
};

Section.defaultProps = {
    children: null,
    className: '',
};

export default Section;
