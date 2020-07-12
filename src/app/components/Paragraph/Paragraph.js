import React from 'react';

import { Heading, Text } from 'Components/Text';
import Translation from 'Components/Translation';

const Paragraph = ({ heading, content, align, preset }) => {
    const className = styles[align] || '';
    const presetClass = styles[preset] || '';
    return (
        <div className={`${className} ${presetClass}`}>
            <Heading>
                <Translation id={heading} />
            </Heading>
            <Text>
                <Translation id={content} />
            </Text>
        </div>
    );
};

export default Paragraph;
