import { Container } from "@mantine/core"
import { CartCard } from "../../components/Card/CartCard"
import { Navbar } from "../../components/Navbar/Navbar"
import { FooterLinks } from "../../components/Footer/CustomFooter"



export const Cart=()=>{
    const Arr=[1,1,1,1,1]
    return(<>
        <Navbar/>
        <Container size='lg'>
        {Arr.map((cart,index)=>
            <CartCard/>
            
            )}
            </Container>
            <FooterLinks/>
        
        </>)
}