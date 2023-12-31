import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    ActionIcon,
    Indicator,
    Badge,
    Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconShoppingCart,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { useNavigate } from 'react-router';

const mockdata = [
    {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
    },
];

export function Navbar() {
    const navigate=useNavigate()
    const CartReducer=useSelector(state=>state)
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
            <Text size="sm" fw={500}>
            {item.title}
            </Text>
            <Text size="xs" c="dimmed">
            {item.description}
            </Text>
        </div>
        </Group>
    </UnstyledButton>
    ));

    return (
    <Box mb={30}>
        <header className={classes.header}>
        <Group justify="space-between" h="100%">
        
        <Image 
        className={classes.logo}
        
            onClick={()=>navigate('/')}
        
        fit='contain'
        w={120}
        src={"https://drive.google.com/uc?export=view&id=183zG6pjfRGDyAjtKC9wvb--7XQysyZE-"}/>
        

            <Group h="100%" gap={0} visibleFrom="sm">
            <Text 
            onClick={()=>navigate('/')} className={classes.link}>
                Home
            </Text>
            

            <Text 
            onClick={()=>navigate('/mens')}
            className={classes.link}>
                Mens
            </Text>
            <Text 
            onClick={()=>navigate('/womens')} className={classes.link}>
                Women
            </Text>
            </Group>

            <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <ActionIcon
            pos='relative'
            onClick={()=>navigate('/cart')}
            ><IconShoppingCart />
            <Indicator
            
            radius='xl'
            color='black'
            withBorder
            pos='absolute'
            bottom={-5}
            left={-1}
            label={CartReducer.CartReducer.length}
            styles={{
                root:{radius:"10px"},
                indicator:{width:"8px",height:"8px",padding:"8px"}
            }}
            />
            </ActionIcon>
            
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
        </header>

        <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
        >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <Text 
            onClick={()=>navigate('/')} className={classes.link}>
            Home
            </Text>
            
            <Text 
            onClick={()=>navigate('/mens')} className={classes.link}>
            Mens
            </Text>
            <Text 
            onClick={()=>navigate('/womens')} className={classes.link}>
            Womens
            </Text>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <ActionIcon
            pos='relative'
            onClick={()=>navigate('/cart')}
            w='20px'
            ><IconShoppingCart />
            <Indicator
            
            radius='xl'
            color='black'
            withBorder
            pos='absolute'
            bottom={-5}
            left={-1}
            label={CartReducer.CartReducer.length}
            styles={{
                root:{radius:"10px"},
                indicator:{width:"8px",height:"8px",padding:"8px"}
            }}
            />
            </ActionIcon>
            </Group>
        </ScrollArea>
        </Drawer>
    </Box>
    );
}

// <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
//                 <HoverCard.Target>
//                 <a href="home" className={classes.link}>
//                     <Center inline>
//                     <Box component="span" mr={5}>
//                         Mens
//                     </Box>
//                     <IconChevronDown
//                         style={{ width: rem(16), height: rem(16) }}
//                         color={theme.colors.blue[6]}
//                     />
//                     </Center>
//                 </a>
//                 </HoverCard.Target>

//                 <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
//                 <Group justify="space-between" px="md">
//                     <Text fw={500}>Features</Text>
//                     <Anchor hhomeef="#" fz="xs">
//                     View all
//                     </Anchor>
//                 </Group>

//                 <Divider my="sm" />

//                 <SimpleGrid cols={2} spacing={0}>
//                     {links}
//                 </SimpleGrid>

//                 <div className={classes.dropdownFooter}>
//                     <Group justify="space-between">
//                     <div>
//                         <Text fw={500} fz="sm">
//                         Get started
//                         </Text>
//                         <Text size="xs" c="dimmed">
//                         Their food sources have decreased, and their numbers
//                         </Text>
//                     </div>
//                     <Button variant="default">Get started</Button>
//                     </Group>
//                 </div>
//                 </HoverCard.Dropdown>
//             </HoverCard>