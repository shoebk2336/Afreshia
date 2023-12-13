import { Badge, Box, Button, Chip, Container, Divider, Flex, Grid,
    Group,
    Image, NumberInput, Rating, SimpleGrid, Space, Text, TextInput, Title } from "@mantine/core"
import { IconCoinRupee, IconCurrencyRupee } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { CustomCarousel } from "../../components/Carousel/Carousel"
import { Navbar } from "../../components/Navbar/Navbar"
import {useDispatch,useSelector} from 'react-redux'
import {  useParams } from "react-router"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router"
import { RestApi } from "../../components/RestApi/RestApi"




export const IndividualProduct=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const ProductReducer=useSelector(state=>state.ProductReducer)
    const {individual}=ProductReducer
    console.log(ProductReducer,'productreducer')
    const {Cat,id}=useParams()
    const [Qty,setQty]=useState(1)

    useEffect(()=>{
        RestApi({subUrl:Cat,Param:id})
        .then((result)=>dispatch({type:"individual",payload:result}))
    },[])
    return<>
    <Navbar/>
    <Container size='lg'>
    <SimpleGrid cols={{base:1,sm:2}} className='Topbox'
    style={{
        gap:"5%",
        border:"0px solid red"
    }}
    
    >
    <Box className="LeftBox"
    
    >
    <Box className="Image"
    >
    <Image 
    fit="contain"
    w={{sm:300,base:"100%"}}
    m='auto'
    
    src={individual?.imageLink}
    
    />
            
            </Box>
        </Box>

        <Box className="RightBox"
        w={{sm:'80%',base:"100%"}}
        h={{base:"300px"}}
        style={{position:"relative",
        border:"0px solid red"
    }}
        
        >
        <Title order={5}
        ff='cursive'
        >AFRESHIA</Title>
        <Space h='md'/>
        <Title order={3}>{individual?.productName}</Title>
        <Text c='gray'>Description about the product in twi three lines</Text>
        <Rating value={individual?.rating} fractions={2} readOnly />
        <Space h='md'/>
        <Flex
        align='center'
        >
        <Text
        td='line-through'
        c='gray'
        >{individual?.actualPrice}</Text>
        <IconCurrencyRupee/>
        <Title order={3}>{individual?.discountedPrice}</Title>
        
        <Badge color="green" ml='10px'>{individual?.discountPercentage}%</Badge>
        </Flex>
        

        <Group
        style={{position:"absolute",bottom:0}}
        
        >
        <Flex 
        justify="space-between"
        gap='20px'
        >
        <NumberInput
        w='50%'
        value={Qty}
        onChange={setQty}
        />
        <Button
        fullWidth
        onClick={()=>dispatch({type:"product",payload:{Qty,id,Cat}})}
        variant="default"
        >Add to cart</Button>
        </Flex>
        <Button
        fullWidth
        onClick={()=>navigate('/cart')}
        >Buy Now</Button>
        </Group>
        </Box>
        </SimpleGrid >

        <Space h='xl'/>
        <Space h='xl'/>
        <Divider/>
        <Space h='xl'/>
        <CustomCarousel/>
        </Container >
    </>
}