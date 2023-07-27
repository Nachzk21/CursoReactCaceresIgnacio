import React from 'react'
import Item from '../Item/Item'
export const ItemList = ({menu_sintacc}) => {
    return (
        <div className='d-flex justify-content-evenly align-items-center flex-wrap'>
            {menu_sintacc.map((producto)=> <Item key={producto.id} producto={producto}></Item>)}
        </div>
    )
}

export default ItemList