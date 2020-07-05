import React from 'react';
import styles from './Home.module.css';
import Button from 'Components/Button/Button';
import Feature from 'Components/Feature/Feature';
import Image from 'Components/Images/Image';
import Section from 'Components/Section/Section';

import { withRouter } from 'react-router-dom';

// TODO: separate components

const Home = () => {
    return (
        <div className={styles.container}>
            <Section backgroundClass={styles.top}>
                <div className={styles.caption}>RENTAGLOO YO</div>
                <div className={styles.text}>
                    Random gibberish just to fill the space
                </div>
                <Button className={styles.discover}>
                    Check dis shit out (Discover)
                </Button>
            </Section>
            <Section className={styles.features} preset="dark-blue">
                <Feature
                    src="aurora"
                    info="With our new way of collecting fish points, you can earn massive discounts on your stay with Rentagloo"
                />
                <Feature src="aurora" info="Random pile of text 2" />
                <Feature src="aurora" info="Random pile of text 3" />
            </Section>
            <Section className={styles.quote} preset="dark-blue">
                Penguins (order Sphenisciformes, family Spheniscidae) are a
                group of aquatic birds. They live almost exclusively in the
                Southern Hemisphere, with only one species, the Galápagos
                penguin, found north of the equator. Highly adapted for life in
                the water, penguins have countershaded dark and white plumage
                and flippers for swimming. Most penguins feed on krill, fish,
                squid and other forms of sea life which they catch while
                swimming underwater. They spend roughly half of their lives on
                land and the other half in the sea.
            </Section>
            <Section className={styles.seal} preset="dark-blue">
                <Image src="pic" />
                <div className={styles.sealText}>
                    Here's a pic of a seal that does not eat penguins. You will
                    not encounter seal eating penguins if you book your stay
                    with us.
                </div>
            </Section>
            <div className={styles.bottom}></div>
        </div>
    );
};

export default withRouter(Home);
