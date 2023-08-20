import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { traerMenu } from "../../mock/data"
import { useParams } from "react-router-dom"



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams();  

    useEffect(()=>{
        traerMenu()
        .then((res)=>{
            if (categoriaId) {
                setProductos(res.filter((item)=> item.categoria === categoriaId))
            }else{
                setProductos(res)
            }
        })
        .catch((error)=> console.log(error))
    },[categoriaId])

        

        const styles = {
            textAlign: 'center', 
            margin: '15px',       
        };
    
    

    return (
        <>
            <h2 style={styles}>Nuestro menu!</h2>
            <ItemList menu_sintacc={productos}></ItemList>
        </>
    )
}

export default ItemListContainer