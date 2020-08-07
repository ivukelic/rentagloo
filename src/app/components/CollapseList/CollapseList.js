import React, { useState } from 'react';
import styles from 'Components/CollapseList/CollapseList.module.css';
import { Title, Heading, Lead, Text } from 'Components/Text';
import Collapse from 'Components/Collapse/Collapse';

const CollapseList = ({ startIndex, collapseData }) => {
    const [selectedIndex, setSelectedIndex] = useState(startIndex);

    return (
        <div className={styles.container}>
            {collapseData.map((data, index) => (
                <Collapse
                    isClosed={selectedIndex !== index}
                    index={index}
                    handleClick={setSelectedIndex}
                />
            ))}
        </div>
    );
};

export default CollapseList;
