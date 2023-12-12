import { Container, Group, ActionIcon, rem, Text, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import classes from './CustomFooter.module.css';

export function FooterLinks() {
return (
    <div className={classes.footer}
    style={{ marginTop: '100px' }}>
    
    <Container className={classes.inner}>
    <Image
    className={classes.logo}
    href="/"
    fit='contain'
    w={70}
    src={"https://drive.google.com/uc?export=view&id=183zG6pjfRGDyAjtKC9wvb--7XQysyZE-"}/>

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