import React from "react"
import { useNavigate,Link} from "react-router-dom"
import productData from "./ProductData"



export default function Products(){

    const navigate = useNavigate()

    const productElements =  productData.map(item=>(
        <div key={item._id}>
            <Link className="productLink" to={`/products/${item._id}`}>{item.name}</Link> - ${item.price}
        </div>
    ))
    return(
        <div className="productDiv">
            <h2 className="productTitle">Our Products</h2>
            <p className="productP">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div className="listPage">
                <h1>Products List Page</h1>
                {productElements}
            </div>

            <footer className="productFooter">
                <button onClick={()=> navigate('/')}>Go to Home</button>
                <button onClick={()=> navigate(1)}>Next 1</button>
                <button onClick={()=> navigate(-1)}>Back 1</button>
            </footer>
        </div>
    )
}