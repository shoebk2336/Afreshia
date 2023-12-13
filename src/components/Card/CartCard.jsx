import { ActionIcon, Badge, Box, Chip, Container, Divider, Flex, Image, NumberInput, Space, Text, Title } from "@mantine/core"
import { IconCurrencyRupee, IconTrash } from "@tabler/icons-react"



export const CartCard=(props)=>{
    const {product}=props
    console.log(product,'produt')
    const {actualPrice,discountedPrice,
        discountPercentage,id,imageLink,
        ProductName,description,rating}=product

return(<>
    <Space h='md'/>
    <Container size='lg'>
    <Flex justify='space-between'>
    <Image 
    fit="contain"
    style={{border:"0px solid red"}}
    w='100%'
    h='300px'
    src={imageLink}/>
    
    <Divider orientation="vertical"/>
    <Box className="right"
    w='40%'
    style={{border:"0px solid red"}}
    >
    <Title order={5} ff='cursive'>AFRESHIA</Title>
    <Title order={4}>{ProductName}</Title>
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
    >{actualPrice}</Text>
    <Space h='sm'/>
    <Text
    fw='600'
    size="15px"
    >
    
    {discountPercentage}%</Text>
    
        </Box>
        <Box className="tagValue">
        <Text
    fw='600'
    size="15px"
    display='flex'
    align='center'
    >
    <IconCurrencyRupee size='15px'/>
    {discountedPrice}</Text>
    <Space h='sm'/>
    <Text
    fw='600'
    size="15px"
    ta='right'
    >
    {discountPercentage}%</Text>
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