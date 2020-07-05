import React, { useState } from 'react';
import Button from 'Components/Button/Button';
import styles from 'Pages/Igloos/Igloos.module.css';
import Image from 'Components/Images/Image';
import { withRouter } from 'react-router-dom';

const Igloos = ({ igloos }) => {
    const [currentIgloo, setCurrentIgloo] = useState(igloos[0]);

    var index = currentIgloo.id;

    const handleLeftClick = () => {
        if (index == 0) {
            setCurrentIgloo(igloos[3]);
        } else {
            setCurrentIgloo(igloos[index - 1]);
        }
    };

    const handleRightClick = () => {
        if (index == 3) {
            setCurrentIgloo(igloos[0]);
        } else {
            setCurrentIgloo(igloos[index + 1]);
        }
    };

    const handleThumbnailClick = () => {};

    const thumbnails = igloos.map((igloo) => igloo.pic);

    return (
        <div className={styles.container}>
            <div className={styles.slideshow}>
                <Button onClick={handleLeftClick} className={styles.btnScroll}>
                    <Image src="left" />
                </Button>
                <div className={styles.pic}>
                    <Image className={styles.image} src={currentIgloo.pic} />
                </div>
                <Button onClick={handleRightClick} className={styles.btnScroll}>
                    <Image src="right" />
                </Button>
            </div>
            <div className={styles.preview}>
                {igloos.map((igloo, index) => (
                    <Button onClick={handleThumbnailClick(index)} key={index}>
                        <Image src={igloo.pic} />
                    </Button>
                ))}
            </div>
            <div className={styles.data}>
                <div className={styles.info}>
                    <div className={styles.name}>{currentIgloo.name}</div>
                    <div className={styles.fact}>{currentIgloo.fact1}</div>
                    <div className={styles.fact}>{currentIgloo.fact2}</div>
                </div>
                <div className={styles.buttonContainer}>
                    <Button className={styles.btnReservation}>
                        Click here to make reservation
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Igloos);
