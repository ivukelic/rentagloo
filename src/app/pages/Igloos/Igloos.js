import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './Igloos.module.css';
import Image from '../../components/Images/Image';
import { withRouter } from 'react-router-dom';

const Igloos = () => {
    let igloos = [
        {
            id: 0,
            name: 'Starry sky',
            fact1: 'Cheapest option out there',
            fact2: 'Enjoy the evening under the stars',
            pic: 'stars',
        },
        {
            id: 1,
            name: 'Aurora Borealis',
            fact1: 'Some fancy night crap',
            fact2: 'You can see it once in a blue moon',
            pic: 'aurora',
        },
        {
            id: 2,
            name: 'Boba',
            fact1: 'Experience the jacuzzi',
            fact2: 'Bubbles everywhere, bubble tea is a bonus',
            pic: 'boba',
        },
        {
            id: 3,
            name: 'Bubble gum',
            fact1: 'Most luxurious summer destination',
            fact2: 'Sun is up all day, all night',
            pic: 'bubblegum',
        },
    ];

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
