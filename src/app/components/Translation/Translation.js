import { useContext } from 'react';
import PropTypes from 'prop-types';

import { TranslationContext } from './TranslationProvider';

const Translation = ({ id, defaultLanguage }) => {
    const context = useContext(TranslationContext);
    const { language, data } = context;

    const currentLanguage = data[language] || data[defaultLanguage];

    return currentLanguage[id] || id;
};

Translation.propTypes = {
    id: PropTypes.string.isRequired,
    defaultLanguage: PropTypes.string,
};

Translation.defaultProps = {
    defaultLanguage: 'en',
};

export default Translation;
