
import {createStore,combineReducers} from 'redux'
import { CartReducer } from './CartReducer'
import { ProductReducer } from './ProductReducer'
const Root=combineReducers({CartReducer,ProductReducer})
export const store=createStore(Root)