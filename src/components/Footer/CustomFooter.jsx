import { Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import classes from './CustomFooter.module.css';

export function FooterLinks() {
return (
    <div className={classes.footer}
    style={{ marginTop: '100px' }}>
    
    <Container className={classes.inner}>
        <MantineLogo size={28} />
        <Text c='dimmed'>© Afreshia. All rights reserved.</Text>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
        <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        </ActionIcon>
        </Group>
    </Container>
    </div>
);
}