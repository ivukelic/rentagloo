import React from 'react';
import styles from 'Pages/Contact/Contact.module.css';
import Section from 'Components/Section/Section';
import { Title, Heading, Text } from 'Components/Text';

const Contact = () => {
    return (
        <div>
            <Section className={styles.section} preset="dark-blue">
                <Title className={styles.font}>Ways to contact me</Title>
                <br />
                <Text>Email: ivavukelic.gm@gmail.com</Text>
                <Text>Phone: 066499056378</Text>
                <Text>
                    <a
                        className={styles.link}
                        href="https://www.linkedin.com/in/iva-vukelic-5985ba152/"
                    >
                        LinkedIn
                    </a>
                </Text>
            </Section>
        </div>
    );
};

export default Contact;
