import { Badge, Box, Card, Divider, Flex, Image, Rating, Space, Text, Title } from "@mantine/core"
import { IconCurrencyRupee } from "@tabler/icons-react"
import classes from './ListingCard.module.css'
import { useNavigate } from "react-router-dom"

export const ListingCard=(props)=>{
    const {setLoading}=props
    const navigate=useNavigate()
    const Navigation=()=>{
        setLoading(true)
        setTimeout(()=>{
            navigate('/Ind')
            setLoading(false)
        },[1000])
    }

    return(<>
        <Card
        className={classes.card}
        style={{border:"0px solid gray"}}
        shadow="lg"
        onClick={Navigation}
        >
        <Image src='https://drive.google.com/uc?export=view&id=1CnFjJU78uNbg6XaNK_c4i-NU219aEFN9'/>
        <Space h='md'/>
        <Divider/>
        <Space h='md'/>
        <Box style={{
            border:"0px solid black"
        }}>
        <Title 
        style={{
        fontFamily:"cursive"    
        }}
        order={6}>AFRESHIA</Title>
        <Title order={4}>Product Name</Title>
        <Text c='gray'>Description about the product</Text>
        <Rating value={3.5} fractions={2} readOnly />
        <Flex
        align='center'
        >
        
        <Text
        c='gray'
        style={{
            textDecoration:"line-through"
        }}
        >1400</Text>
        <IconCurrencyRupee size='20px' />
        <Title 
        
        order={5}>
        1250rs</Title>
        </Flex>
        
        

        
        </Box>
        </Card>
        </>)
}