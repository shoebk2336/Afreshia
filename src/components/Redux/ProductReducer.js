

const Initial={
    carousel1:[],
    womens:[],
    mens:[],
    individual:[],
    cart:[]
}

export const ProductReducer=(state=Initial,action)=>{
    const {type,payload}=action
    switch(type){
        case "carousel1":return({...state,carousel1:payload})
        case "women":return({...state,womens:payload})
        case "mens":return({...state,mens:payload})
        case "individual":return({...state,individual:payload})
        case "cart":return({...state,cart:[...state.cart,payload]})
        default : return state;
    }
}