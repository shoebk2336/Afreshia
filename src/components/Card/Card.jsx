import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './Card.module.css';

export function ImageCard() {
return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
    <div>
        <Text className={classes.category} size="xs">
        nature
        </Text>
        <Title order={3} className={classes.title}>
        Best forests to visit in North America
        </Title>
    </div>
    
    </Paper>
);
}