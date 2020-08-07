import React, { useState } from 'react';
import styles from 'Components/Collapse/Collapse.module.css';
import { Title, Heading, Lead, Text } from 'Components/Text';

const Collapse = ({ isClosed, index, handleClick }) => {
    const onClicked = () => {
        handleClick(index);
    };

    return (
        <div className={styles.container}>
            {!isClosed ? (
                <div className={styles.expanded}>
                    <p>Expanded stuff in here hello</p>
                    <p>Eehehehehe Cyyyyy</p>
                </div>
            ) : (
                <div className={styles.button} onClick={onClicked}>
                    expando
                </div>
            )}
        </div>
    );
};

export default Collapse;
