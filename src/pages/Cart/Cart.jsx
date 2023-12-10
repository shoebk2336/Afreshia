import { CartCard } from "../../components/Card/CartCard"



export const Cart=()=>{
    const Arr=[1,1,1,1,1]
    return(<>
        
        {Arr.map((cart,index)=>
            <CartCard/>
            
            )}
        
        </>)
}