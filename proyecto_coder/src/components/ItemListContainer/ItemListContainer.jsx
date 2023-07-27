import React, { useEffect, useState } from "react"
import Home from "../../pages/Home"
import ItemCount from "../ItemCount/itemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [menu_sintacc, set_menu_sintacc] = useState([])
    const menu = [
        { id: "1", plato: "hamburguesa simple con queso", stock: 7, precio: 4500, descipcion: "en pan de papa, dos medallones blend de carnes, queso cheddar, panceta y cebollas caramelizadas", img: "../img/Menu/Hamburguesa.png" },
        { id: "2", plato: "Sándwich de Milanesa", stock: 5, precio: 4100, descipcion: "en pan de hierbas, con queso, tomate, aderezo lactonesa", img:"../img/Menu/Milanesa.png" },
        { id: "3", plato: "Pulled pork", stock: 10, precio: 4500, descipcion: "bondiola desmechada con salsa barbacoa salsa criolla, lechuga y queso provolone.", img:"../img/Menu/Bondiola.jpg" },
        { id: "4", plato: "Roll veggie", stock: 15, precio: 3900, descipcion: "berenjenas asadas, salteado de hongos, zuchinni y queso azul con aderezo de aceite verde.", img:"../img/Menu/Roll.jpg" },
    ]

    const getMenu = () => {
        return new Promise((resolve, reject) => {
            let error = false
            
            setTimeout(() => {
                if (error) {
                    reject("No podemos obtener la informacion de los productos en este momento, por favor intente mas tarde")
                } else {
                    resolve(menu)
                }
            },2000)
        })
    }

    useEffect(()=>{
        getMenu()
        .then((res)=>set_menu_sintacc(res))
        .catch((error)=> console.log(error))
    },[])

    

    return (
        <>
            <Home></Home>
            <ItemList menu_sintacc={menu_sintacc}></ItemList>
        </>
    )
}

export default ItemListContainer