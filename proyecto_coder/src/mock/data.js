const menu = [
    { id: "1", categoria:"hamburguesas", plato: "hamburguesa simple con queso", stock: 7, precio: 4500, descipcion: "en pan de papa, dos medallones blend de carnes, queso cheddar, panceta y cebollas caramelizadas", img: "../img/Menu/Hamburguesa.png" },
    { id: "2", categoria:"entrepanes", plato: "Sándwich de Milanesa", stock: 5, precio: 4100, descipcion: "Sanguche de milanesa clasico, con pan sin tacc, sin cambiar su textura ni su sabor, puede incluir lechuga, tomate, huevo o hasta jamon y queso ", img:"../img/Menu/Milanesa.png" },
    { id: "3", categoria:"entrepanes", plato: "Pulled pork", stock: 10, precio: 4500, descipcion: "bondiola desmechada con salsa barbacoa salsa criolla, lechuga y queso provolone.", img:"../img/Menu/Bondiola.jpg" },
    { id: "4", categoria:"veggie", plato: "Roll veggie", stock: 15, precio: 3900, descipcion: "berenjenas asadas, salteado de hongos, zuchinni y queso azul con aderezo de aceite verde.", img:"../img/Menu/Roll.jpg" },
]

export const traerMenu = () => {
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

export const traerItem = (id) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(menu.find((plato)=> plato.id === id))
        }, 2000);
    })
}