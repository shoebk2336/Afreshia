import { Container, LoadingOverlay, SimpleGrid, Space } from "@mantine/core"
import { Navbar } from "../../components/Navbar/Navbar"
import { ImageCard } from "../../components/Card/Card"
import {ListingCard} from '../../components/Card/ListingCard'
import { useEffect, useState } from "react"
import { PageLoading } from "../../components/LoadingOverlay/LoadingOverlay"
import { FooterLinks } from "../../components/Footer/CustomFooter"
import { useDispatch,useSelector } from "react-redux"
import { RestApi } from "../../components/RestApi/RestApi"




export const MensProduct=()=>{
    const ProductReducer=useSelector(state=>state.ProductReducer)
    console.log(ProductReducer,'mens')
    const dispatch=useDispatch()
    const [Loading,setLoading]=useState(false)

    useEffect(()=>{
        RestApi({subUrl:"mens"})
        .then((result)=>dispatch({type:"mens",payload:result}))
    },[])
    return(<>
        <Navbar/>
        
        <Space h='lg'/>
        <Container size='lg'>
        <SimpleGrid cols={{base:1,sm:3}}>
        <PageLoading visible={Loading}/>
        {ProductReducer?.mens?.map((product)=>
            <ListingCard key={product.id}
            setLoading={setLoading}
            data={product}
            to='mens'/>
            )}
        </SimpleGrid>
        </Container>
        <FooterLinks/>
        </>)
}