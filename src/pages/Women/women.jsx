import { Container, SimpleGrid, Space } from "@mantine/core"
import { Navbar } from "../../components/Navbar/Navbar"
import { PageLoading } from "../../components/LoadingOverlay/LoadingOverlay"
import { ListingCard } from "../../components/Card/ListingCard"
import { useState } from "react"
import { FooterLinks } from "../../components/Footer/CustomFooter"








export const WomensProduct=()=>{
    const arr=[1,1,1,1,1,1,]
    const [Loading,setLoading]=useState(false)
    return(<>
        <Navbar/>
        
        <Space h='lg'/>
        <Container size='lg'>
        <SimpleGrid cols={{base:1,sm:3}}>
        <PageLoading visible={Loading}/>
        {arr.map((card,index)=>
            <ListingCard key={index} setLoading={setLoading}/>
            )}
        </SimpleGrid>
        </Container>
        <FooterLinks/>
        </>
        )
}