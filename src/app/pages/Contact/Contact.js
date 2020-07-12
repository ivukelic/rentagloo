import React from 'react';
import styles from 'Pages/Contact/Contact.module.css';
import Section from 'Components/Section/Section';
import { Title, Heading, Text } from 'Components/Text';

const Contact = () => {
    return (
        <div>
            <Section className={styles.section} preset="dark-blue">
                <Title className={styles.font}>Ways to contact me</Title>
                <Text>Email: ivavukelic.gm@gmail.com</Text>
                <Text>Phone: 066499056378</Text>
                <Text>
                    LinkedIn: https://www.linkedin.com/in/iva-vukelic-5985ba152/
                </Text>
            </Section>
        </div>
    );
};

export default Contact;
