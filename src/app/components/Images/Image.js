import React from 'react';

import * as ImageList from './ImageList.js';

const Image = ({ src, ...other }) => {
    return <img src={ImageList[src]} alt="static img" {...other} />;
};

export default Image;
