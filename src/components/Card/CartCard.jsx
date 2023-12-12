import { ActionIcon, Badge, Box, Chip, Container, Divider, Flex, Image, NumberInput, Space, Text, Title } from "@mantine/core"
import { IconCurrencyRupee, IconTrash } from "@tabler/icons-react"



export const CartCard=()=>{
return(<>
    <Space h='md'/>
    <Container size='lg'>
    <Flex justify='space-between'>
    <Image 
    style={{border:"0px solid red"}}
    w='50%'
    src="https://drive.google.com/uc?export=view&id=1CnFjJU78uNbg6XaNK_c4i-NU219aEFN9"/>
    
    <Divider orientation="vertical"/>
    <Box className="right"
    w='40%'
    style={{border:"0px solid red"}}
    >
    <Title order={5} ff='cursive'>AFRESHIA</Title>
    <Title order={4}>Product Name</Title>
    <Space h='md'/>
    <Flex
    justify='space-between'
    align='center'
    >
    <NumberInput
    w='15%'
    />
    <ActionIcon variant="default">
    <IconTrash />
    </ActionIcon>
    </Flex>
    <Space h='md'/>
    <Divider/>
    <Space h='sm'/>
    <Flex 
    justify='space-between'>
    <Box className="Tagname">
    <Text
    fw='600'
    size="15px"
    >Price</Text>
    <Space h='sm'/>
    <Text
    fw='600'
    size="15px"
    >
    
    Discount</Text>
    
        </Box>
        <Box className="tagValue">
        <Text
    fw='600'
    size="15px"
    display='flex'
    align='center'
    >
    <IconCurrencyRupee size='15px'/>
    1400</Text>
    <Space h='sm'/>
    <Text
    fw='600'
    size="15px"
    ta='right'
    >
    25%</Text>
        </Box>
    </Flex>
    <Space h='sm'/>
    <Divider/>
    <Space h='sm'/>
    <Flex
    justify='space-between'
    >
    <Text
    fw='600'
    size="15px"
    >Sub Total</Text>
    <Text
    fw='600'
    size="15px"
    display='flex'
    >    
    <IconCurrencyRupee size='15px'/>
    1250
    </Text>
    </Flex>
    </Box>
    </Flex>
    <Space h='md'/>
    <Divider/>
    </Container>
    </>)
}