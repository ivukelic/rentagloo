import React from 'react';
import styles from 'Pages/About/About.module.css';
import Section from 'Components/Section/Section';
import { Title, Heading, Text } from 'Components/Text';
import Image from 'Components/Images/Image';
import { Link } from 'react-router-dom';
import Translation from 'Components/Translation/Translation';

import Chapter from 'Components/Chapter/Chapter';
import InfoCard from 'Components/InfoCard/InfoCard';

const About = () => {
    return (
        <div className={styles.container}>
            <Section className={styles.section} preset="dark-blue">
                <Chapter title="aboutTitle" heading="hi" preset="violet" />
            </Section>
            <Section preset="dark-blue" className={styles.dataContainer}>
                <InfoCard imgSrc="bab" imgClass={styles.image}>
                    <div className={styles.bioContainer}>
                        <Heading className={styles.info}>
                            <Translation id="profile" />
                        </Heading>
                        <Text>
                            <Translation id="bio" />
                        </Text>
                    </div>
                </InfoCard>
                <InfoCard imgSrc="me" imgClass={styles.image} isFlipped>
                    <div className={styles.skillsContainer}>
                        <Heading className={styles.info}>
                            <Translation id="skillsAndHobbies" />
                        </Heading>
                        <Text>
                            <Translation id="techSkills" />
                            <br />
                            <Translation id="langSkills" />
                            <br />
                            <br />
                            <Translation id="hobbies" />
                        </Text>
                    </div>
                </InfoCard>
                <Section preset="dark-blue">
                    <a
                        className={styles.button}
                        href="https://github.com/ivukelic/rentagloo"
                    >
                        <Translation id="viewGit" />
                    </a>
                    <div>
                        <Link className={styles.button} to="/contact">
                            <Translation id="clickContact" />
                        </Link>
                    </div>
                </Section>
            </Section>
        </div>
    );
};

export default About;
