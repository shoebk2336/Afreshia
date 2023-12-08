import { useEffect, useState } from "react"
import {  CustomCarousel } from "../../components/Carousel/Carousel"
import { Navbar } from "../../components/Navbar/Navbar"
import { LeadGrid } from "../../components/Grid/Grid"
import { Banner } from "../../components/Banner/Banner"
import { Footer } from "../../components/Footer/Footer"
import { FeatureSection } from "../../components/FeatureSection/FeatureSection"
import { Container } from "@mantine/core"



export const Home=()=>{
    const [Fetcheddata,setData]=useState()
    console.log(Fetcheddata)
    const Fetch=async()=>{
        try{const Data=await fetch(` http://localhost:3001/carousel1`)
        const res=await Data.json()
    setData(res)
    }
    catch(err){console.log(err)}
    }
    useEffect(()=>{Fetch()},[])
    return(<>
        <Container size='lg'>
        <Navbar/>
        <CustomCarousel Data={Fetcheddata}/>
        <Banner/>
        <LeadGrid/>
        <FeatureSection/>
        </Container>
        </>)
}