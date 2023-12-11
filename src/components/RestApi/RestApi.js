


export const RestApi=async(props)=>{
    const {subUrl}=props


    try{const Data=await fetch('http://localhost:3001/'+subUrl)
        const Response=Data.json()
    return Response}
    catch(err){return err}
}