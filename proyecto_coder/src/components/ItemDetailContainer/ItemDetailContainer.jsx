import { React, useState, useEffect } from "react"
import { traerItem } from "../../mock/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [plato_solo, setPLato_solo] = useState ({})

        const {id} = useParams ()
        

        useEffect(()=>{
            traerItem(id)
            .then((res) =>setPLato_solo(res))
            .catch((error)=> console.log(error))
        },[])


    return (
        <div>
            <ItemDetail plato_solo={plato_solo}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer