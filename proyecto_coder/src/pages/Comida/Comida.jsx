import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'



const Comida = () => {
    const {categoriaId} = useParams()


    
    return (
        <ItemListContainer categorias={categoriaId}></ItemListContainer>
    )
}

export default Comida