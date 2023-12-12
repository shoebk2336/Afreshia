import {  BrowserRouter, Route, Routes } from "react-router-dom"
import { MensProduct } from "../../pages/Men/Men"
import { WomensProduct } from "../../pages/Women/women"
import { Home } from "../../pages/Home/Home"
import { IndividualProduct } from "../../pages/IndividualProduct/IndProduct"
import { Cart } from "../../pages/Cart/Cart"


export const Routers=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mens" element={<MensProduct/>} />
        <Route path="/womens" element={<WomensProduct/>} />
        <Route path="/:Cat/:id" element={<IndividualProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/car" element={<Cart/>} />

        </Routes>
        </BrowserRouter>
    )
}