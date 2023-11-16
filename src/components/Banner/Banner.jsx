import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import classes from './Banner.module.css';

export function Banner() {
return (
    <div className={classes.wrapper}>
    <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
        Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
        You will never miss important product updates, latest news and community QA sessions. Our
        newsletter is once a week, every Sunday.
        </Text>

        
    </div>
    </div>
);
}