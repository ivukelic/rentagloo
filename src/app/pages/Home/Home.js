import React from 'react';
import styles from 'Pages/Home/Home.module.css';
import Feature from 'Components/Feature/Feature';
import ImageCard from 'Components/ImageCard/ImageCard';
import Section from 'Components/Section/Section';
import { withRouter, Link } from 'react-router-dom';
import Translation from 'Components/Translation/Translation';
import { Title, Heading, Quote } from 'Components/Text';
import InfoCard from 'Components/InfoCard/InfoCard';
import { Lead } from '../../components/Text';

const Home = () => {
    return (
        <div className={styles.container}>
            <Section backgroundClass={styles.top}>
                <Title>RENTAGLOO</Title>
                <Heading>
                    <Translation id="header" />
                </Heading>
                <Link to="/igloos" className={styles.discover}>
                    <Translation id="discover" />
                </Link>
            </Section>
            <Section className={styles.features} preset="dark-blue">
                <Feature src="aurora" info="feature1" />
                <Feature src="bubblegum" info="feature2" />
                <Feature src="stars" info="feature3" />
            </Section>
            <Section className={styles.quote} preset="dark-blue">
                <Lead>
                    <Translation id="penguinText" />
                </Lead>
            </Section>
            <Section className={styles.seal} preset="dark-blue">
                <InfoCard imgSrc="ceo" imgClass={styles.quoteImg}>
                    <Quote>
                        <h2>
                            <Translation id="ceo" />
                        </h2>
                    </Quote>
                </InfoCard>
                <br />
                <InfoCard imgSrc="pic" imgClass={styles.quoteImg} isFlipped>
                    <Quote>
                        <h2>
                            <Translation id="seal" />
                        </h2>
                    </Quote>
                </InfoCard>
            </Section>
            <div className={styles.bottom}></div>
        </div>
    );
};

export default withRouter(Home);
