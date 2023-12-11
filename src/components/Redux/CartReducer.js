


const Initial=[]

export const CartReducer=(state=Initial,action)=>{
    const {type,payload}=action
    switch(type){
        case "product":return([...state,payload])
        default: return state
    }
}