import React, { useState } from 'react';
import Button from 'Components/Button/Button';
import styles from 'Pages/Igloos/Igloos.module.css';
import Image from 'Components/Images/Image';
import Section from 'Components/Section/Section';
import { withRouter, Link } from 'react-router-dom';

const Igloos = ({ igloos }) => {
    const [currentIgloo, setCurrentIgloo] = useState(igloos[0]);

    var index = currentIgloo.id;

    const handleLeftClick = () => {
        if (index == 0) {
            setCurrentIgloo(igloos[igloos.length - 1]);
        } else {
            setCurrentIgloo(igloos[index - 1]);
        }
    };

    const handleRightClick = () => {
        if (index == igloos.length - 1) {
            setCurrentIgloo(igloos[0]);
        } else {
            setCurrentIgloo(igloos[index + 1]);
        }
    };

    const handleThumbnailClick = (index) => () => {
        setCurrentIgloo(igloos[index]);
    };

    return (
        <div className={styles.container}>
            <Section className={styles.slideshow}>
                <Button onClick={handleLeftClick} className={styles.btnScroll}>
                    <Image src="left" />
                </Button>
                <div className={styles.pic}>
                    <Image className={styles.image} src={currentIgloo.pic} />
                </div>
                <Button onClick={handleRightClick} className={styles.btnScroll}>
                    <Image src="right" />
                </Button>
            </Section>
            <Section className={styles.preview}>
                {igloos.map((igloo, index) => (
                    <Button
                        onClick={handleThumbnailClick(index)}
                        key={index}
                        className={styles.button}
                    >
                        <Image src={igloo.pic} className={styles.thumbnail} />
                    </Button>
                ))}
            </Section>
            <Section className={styles.data}>
                <div className={styles.info}>
                    <div className={styles.name}>{currentIgloo.name}</div>
                    <div className={styles.fact}>❄{currentIgloo.fact1}</div>
                    <div className={styles.fact}>❄{currentIgloo.fact2}</div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="reservation" className={styles.btnReservation}>
                        Click here to make reservation
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default withRouter(Igloos);
