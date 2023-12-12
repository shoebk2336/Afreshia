import env from "react-dotenv"


export const RestApi=async(props)=>{
    const {subUrl,Param}=props

const Url1=`https://afreshiapi.onrender.com/${subUrl}/${Param}`
const Url2=`https://afreshiapi.onrender.com/${subUrl}`
    try{const Data=await fetch(Param?Url1:Url2)
        const Response=Data.json()
    return Response}
    catch(err){return err}
}