import React from 'react'
import {Card, ListGroup, Button} from 'react-bootstrap'
import ItemCount from '../ItemCount/itemCount'
const Item = ({producto}) => {

    const onAdd = (cantidad) =>{
        console.log(`compraste ${cantidad} productos`)
    }

    return (
        <Card style={{ width: '18rem', height:"12rem" }}>
            <Card.Img variant="top" src={producto.img} style={{height: "100%"}}/>
            <Card.Body>
                <Card.Title>{producto.plato}</Card.Title>
                <Card.Text>
                    {producto.descipcion}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Valor: ${producto.precio}</ListGroup.Item>
                <ListGroup.Item>Stock disponible: {producto.stock}</ListGroup.Item>
                
            </ListGroup>
            <Card.Body>
                <ItemCount initial={1} stock= {producto.stock}onAdd={onAdd}></ItemCount>
            </Card.Body>
        </Card>
    )
}

export default Item