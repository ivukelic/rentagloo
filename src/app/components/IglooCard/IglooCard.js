import React from 'react';
import Button from 'Components/Button/Button';
import styles from './IglooCard.module.css';
import pic from 'Assets/pic.png';
import esvigji from 'Assets/pengu.svg';

const IglooCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img className={styles.pic} src={pic}></img>
            </div>
            <div className={styles.info}>
                <div className={styles.top}>
                    <b>Best igloo ever</b>
                </div>
                <div className={styles.bottom}>
                    12€ per pengu
                    <Button className={styles.button} children="Reservation" />
                </div>
            </div>
        </div>
    );
};

export default IglooCard;
