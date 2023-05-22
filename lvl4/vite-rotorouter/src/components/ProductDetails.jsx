import React from "react"
import { useParams,useNavigate } from "react-router-dom"
import productData from "./ProductData"

export default function ProductDetails(){
    const {productId} = useParams()
    const navigate = useNavigate()
    const foundProduct = productData.find(product=> product._id === productId)
    console.log(useParams)
    return(
        <div className="detailsPage">
            <h1 className="detailsTitle">Product Detail Page</h1>
            <h3 className="detailsProduct">{foundProduct.name} - Cost:${foundProduct.price}</h3>
            <p className="description">{foundProduct.description}</p>
            <footer className="detailsFooter">
                <button onClick={()=> navigate('/products')}>Back 1</button>
            </footer>
            
        </div>
    )
}