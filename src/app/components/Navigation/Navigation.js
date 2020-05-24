import React from 'react';
import Button from '../Button/Button';

const Navigation = () => {
    return (
        <div className={styles.container}>
            <div>
                <Button to="/igloos">Igloos</Button>
            </div>
            <div>
                <Button to="/about">About</Button>
            </div>
            <div>
                <Button to="/contact">Contact</Button>
            </div>
        </div>
    );
};

export default Navigation;
