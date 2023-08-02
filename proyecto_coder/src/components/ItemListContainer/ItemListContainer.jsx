import React, { useEffect, useState } from "react"

import ItemList from "../ItemList/ItemList"
import { traerMenu } from "../../mock/data"
import { useParams } from "react-router-dom"


const ItemListContainer = (categorias) => {
    const [menu_sintacc, set_menu_sintacc] = useState([])
    
    useEffect(()=>{
        traerMenu()
        .then((res)=>{
            if (categorias) {
                set_menu_sintacc(res.filter((item)=> item.categoria === categorias))
            }else{
                set_menu_sintacc(res)
            }
        })
        .catch((error)=> console.log(error))
    },[])

        

        const styles = {
            textAlign: 'center', 
            margin: '15px',       
        };
    
    

    return (
        <>
            <h2 style={styles}>Nuestro menu!</h2>
            <ItemList menu_sintacc={menu_sintacc}></ItemList>
        </>
    )
}

export default ItemListContainer