import React from 'react'

export const ItemDetail = ({ plato_solo }) => {
    const styles_p = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        fontSize: '25px',
    }

    const styles_img = {
        width: 'auto',       
        height: '250px',     
        margin: '10px',   
    }
    
    const styles_div = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    
    return (
        <>
            <div style={styles_div}>
                <img src={plato_solo.img} alt={plato_solo.name} style={styles_img}></img>
                <p style={styles_p}>{plato_solo.descipcion}</p>
            </div>
        </>
    )
}

export default ItemDetail