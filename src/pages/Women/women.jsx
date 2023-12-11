import { Container, SimpleGrid, Space } from "@mantine/core"
import { Navbar } from "../../components/Navbar/Navbar"
import { PageLoading } from "../../components/LoadingOverlay/LoadingOverlay"
import { ListingCard } from "../../components/Card/ListingCard"
import { useEffect, useState } from "react"
import { FooterLinks } from "../../components/Footer/CustomFooter"
import { useDispatch, useSelector } from "react-redux"
import { RestApi } from "../../components/RestApi/RestApi"

export const WomensProduct=()=>{
    const dispatch=useDispatch()
    const ProductReducer=useSelector(state=>state.ProductReducer)

    const arr=[1,1,1,1,1,1,]
    const [Loading,setLoading]=useState(false)
    console.log(ProductReducer,'womens')

    useEffect(()=>{
        RestApi({subUrl:'womens'})
        .then((result)=>dispatch({type:"women",payload:result}))
    },[])
    return(<>
        <Navbar/>
        
        <Space h='lg'/>
        <Container size='lg'>
        <SimpleGrid cols={{base:1,sm:3}}>
        <PageLoading visible={Loading}/>
        {ProductReducer?.womens?.map((product)=>
            <ListingCard key={product?.id} 
            setLoading={setLoading} 
            data={product}
            to='womens'/>
            )}
        </SimpleGrid>
        </Container>
        <FooterLinks/>
        </>
        )
}