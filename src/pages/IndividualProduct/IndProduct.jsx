import { Badge, Box, Button, Chip, Container, Divider, Flex, Grid,
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
    console.log(Cat,id,'cat')
    // const id=1
    const [Qty,setQty]=useState(1)

    useEffect(()=>{
        RestApi({subUrl:Cat,Param:id})
        .then((result)=>dispatch({type:"individual",payload:result}))
    },[])
    return<>
    <Navbar/>
    <Container size='lg'>
    <SimpleGrid cols={2} className='Topbox'
    style={{
        gap:"5%"
    }}
    
    >
    <Box className="LeftBox"
    
    >
    <Box className="Image">
    <Image 
    fit="contain"
    w={300}
    src={individual?.imageLink}
    
    />
            
            </Box>
        </Box>

        <Box className="RightBox"
        w='80%'
        style={{position:"relative"
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
        <SimpleGrid cols={3} className="buybtn"
        justify='space-between'
        w='100%'
        style={{position:"absolute",bottom:"0",border:"0px solid red"}}
        >
        <NumberInput
        w='50%'
        
        value={Qty}
        onChange={setQty}
        />
        <Button
        fullWidth
        onClick={()=>dispatch({type:"product",payload:{Qty,id}})}
        variant="default"
        >Add to cart</Button>
        <Button
        fullWidth
        onClick={()=>navigate('/cart')}
        >Buy Now</Button>
        </SimpleGrid>
        </Box>
        </SimpleGrid >

        <Space h='xl'/>
        <Divider/>
        <Space h='xl'/>
        <CustomCarousel/>
        </Container >
    </>
}