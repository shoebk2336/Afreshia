import { useEffect, useState } from "react"
import {  CustomCarousel } from "../../components/Carousel/Carousel"
import { Navbar } from "../../components/Navbar/Navbar"
import { LeadGrid } from "../../components/Grid/Grid"
import { Banner } from "../../components/Banner/Banner"
import { FeatureSection } from "../../components/FeatureSection/FeatureSection"
import { Container } from "@mantine/core"
import { RestApi } from "../../components/RestApi/RestApi"
import { FooterLinks } from "../../components/Footer/CustomFooter"



export const Home=()=>{
    const [Fetcheddata,setData]=useState()
    console.log(Fetcheddata)
    useEffect(()=>{
        RestApi({subUrl:'carousel1'})
        .then((result)=> setData(result))
    },[])

    return(<>
        <Navbar/>
        <Container size='lg'>
        
        <CustomCarousel Data={Fetcheddata}/>
        <Banner/>
        <LeadGrid/>
        <FeatureSection/>
        </Container>
        <FooterLinks/>
        </>)
}