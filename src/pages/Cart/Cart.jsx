import { Container } from "@mantine/core"
import { CartCard } from "../../components/Card/CartCard"
import { Navbar } from "../../components/Navbar/Navbar"
import { FooterLinks } from "../../components/Footer/CustomFooter"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { RestApi } from "../../components/RestApi/RestApi"


export const Cart=()=>{
    const dispatch=useDispatch()
    const CartReducer=useSelector(state=>state.CartReducer)
    const ProductReducer=useSelector(state=>state.ProductReducer)
    
    console.log(CartReducer,'cartreducer')
    console.log(ProductReducer,'productreducer')

    useEffect(()=>{
        console.log('length',CartReducer.length)
        const PushData=()=>{
    for(let i=0;i<CartReducer.length;i++){
        RestApi({subUrl:CartReducer[i].Cat,Param:CartReducer[i].id})
        .then((result)=>NewCartObj(result))
    
        const NewCartObj=(result)=>{
            let payload=result
            dispatch({type:"cart",payload})
            return
        }
        return
    } }
    PushData()
    },[])
    
    return(<>
        <Navbar/>
        <Container size='lg'>
        {ProductReducer?.cart?.map((product)=>
            <CartCard product={product} key={product.id}/>
            
            )}
            </Container>
            <FooterLinks/>
        
        </>)
}