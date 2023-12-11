import { Badge, Box, Card, Divider, Flex, Image, Rating, Space, Text, Title } from "@mantine/core"
import { IconCurrencyRupee } from "@tabler/icons-react"
import classes from './ListingCard.module.css'
import { useNavigate, useParams } from "react-router-dom"

export const ListingCard=(props)=>{
    const {setLoading,to,data}=props
    const navigate=useNavigate()
    // const {id}=useParams()
    const id=1
    const Navigation=()=>{
        setLoading(true)
        setTimeout(()=>{
            navigate('/'+to+'/'+id)
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
        <Image
        // fit=""
        // style={{height:"300px"}}
        src={data?.imageLink}/>
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
        <Title order={4}>{data?.productName}</Title>
        <Text c='gray'>{data?.description}</Text>
        <Rating value={data?.rating} fractions={2} readOnly />
        <Flex
        align='center'
        >
        
        <Text
        c='gray'
        style={{
            textDecoration:"line-through"
        }}
        >{data?.actualPrice}</Text>
        <IconCurrencyRupee size='20px' />
        <Title 
        order={5}>
        {data?.discountedPrice}</Title>
        </Flex>
        </Box>
        </Card>
        </>)
}