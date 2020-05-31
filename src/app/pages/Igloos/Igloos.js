import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import styles from './Igloos.module.css';
import Image from '../../components/Images/Image';

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
    const [currentIglooIndex, setCurrentIglooIndex] = useState(0);

    //TO DO : fix click problem - needs to be clicked twice

    const handleLeftClick = () => {
        if (currentIglooIndex == 0) {
            setCurrentIglooIndex(3);
        } else {
            setCurrentIglooIndex(currentIglooIndex - 1);
        }
        setCurrentIgloo(igloos[currentIglooIndex]);
    };

    const handleRightClick = () => {
        if (currentIglooIndex == 3) {
            setCurrentIglooIndex(0);
        } else {
            setCurrentIglooIndex(currentIglooIndex + 1);
        }
        setCurrentIgloo(igloos[currentIglooIndex]);
    };

    return (
        <div className={styles.container}>
            <div className={styles.slideshow}>
                <Button onClick={handleLeftClick} className={styles.btnLeft}>
                    levo
                </Button>
                <div className={styles.pic}>
                    <Image className={styles.image} src={currentIgloo.pic} />
                </div>
                <Button onClick={handleRightClick} className={styles.btnRight}>
                    Desno
                </Button>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{currentIgloo.name}</div>
                <div className={styles.fact}>{currentIgloo.fact1}</div>
                <div className={styles.fact}>{currentIgloo.fact2}</div>
            </div>
        </div>
    );
};

export default Igloos;
