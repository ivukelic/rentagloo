import React, { useContext, useState, createContext } from 'react';
import PropTypes from 'prop-types';

import content from 'Assets/Content/Content';

const TranslationContext = createContext({
    language: 'en',
    data: content,
});

const TranslationProvider = ({ children }) => {
    const context = useContext(TranslationContext);
    const [language, setLanguage] = useState(context.language);

    const provider = {
        language,
        data: content,
        setCurrentLanguage: (lang) => {
            setLanguage(lang);
        },
    };

    return (
        <TranslationContext.Provider value={provider}>
            {children}
        </TranslationContext.Provider>
    );
};

TranslationProvider.propTypes = {
    children: PropTypes.node,
};

TranslationProvider.defaultProps = {
    children: null,
};

export { TranslationProvider, TranslationContext };
