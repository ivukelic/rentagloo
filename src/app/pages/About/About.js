import React from 'react';
import styles from 'Pages/About/About.module.css';
import Section from 'Components/Section/Section';
import { Title, Heading, Text } from 'Components/Text';
import Image from 'Components/Images/Image';
import { Link } from 'react-router-dom';
import Translation from 'Components/Translation/Translation';

const About = () => {
    return (
        <div className={styles.container}>
            <Section className={styles.section} preset="dark-blue">
                <Title className={styles.font}>
                    <Translation id="aboutTitle" />
                </Title>
            </Section>
            <Section preset="dark-blue">
                <Heading className={styles.font}>
                    <Translation id="hi" />
                </Heading>
            </Section>
            <Section preset="dark-blue" className={styles.dataContainer}>
                <div>
                    <Image src="bab" className={styles.image} />
                    <div>
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
                    </div>
                </div>
                <div>
                    <Heading className={styles.info}>
                        <Translation id="profile" />
                    </Heading>
                    <Text>
                        <Translation id="bio" />
                    </Text>
                    <Heading className={styles.info}>
                        <Translation id="education" />
                    </Heading>
                    <Text>2015 – 2020</Text>
                    <Text>
                        <Translation id="algebra" />{' '}
                    </Text>
                    <Text>
                        <Translation id="bacc" />
                    </Text>
                    <Text>2010 – 2015</Text>
                    <Text>
                        <Translation id="forestry" />
                    </Text>
                    <Text>
                        <Translation id="urban" />
                    </Text>
                    <Heading className={styles.info}>
                        <Translation id="experience" />
                    </Heading>
                    <Text>July 2019 – November 2019</Text>
                    <Text>
                        <Translation id="job" />
                    </Text>
                    <Text>
                        <Translation id="desc1" />
                    </Text>
                    <br />
                    <Text>March 2018 – July 2018 </Text>
                    <Text>
                        <Translation id="intern" />
                    </Text>
                    <Text>
                        <Translation id="desc2" />
                    </Text>
                    <Heading className={styles.info}>
                        <Translation id="skills" />
                    </Heading>
                    <Text>
                        <Translation id="tech" />
                    </Text>
                    <Text>
                        <Translation id="languages" />
                    </Text>
                    <Heading className={styles.info}>
                        <Translation id="hobbies" />
                    </Heading>
                    <Text>
                        <Translation id="hobby" />
                    </Text>
                </div>
            </Section>
        </div>
    );
};

export default About;
