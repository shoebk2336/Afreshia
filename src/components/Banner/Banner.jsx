import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import classes from './Banner.module.css';

export function Banner() {
return (
    <div className={classes.wrapper}>
    <div className={classes.body}>
        <Title className={classes.title}>Discover the Latest Fashion Trends...</Title>
        <Text fw={500} fz="lg" mb={5}>
        Elevate Your Style with Our New Collection!
        </Text>
        <Text fz="sm" c="dimmed">
        Explore a curated selection of fashion-forward 
        clothing and accessories designed to make you stand out. 
        Stay on top of the latest trends and express your unique style.
        </Text>

        
    </div>
    </div>
);
}