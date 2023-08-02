function Principal () {

    const styles_title = {
        textAlign: 'center', 
        margin: '15px',
        };

    const style_info = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        fontSize: '25px',
    }

    return (
        <>
            <h2 style={styles_title}>Bienvenidos a sintaxis!</h2>
            <p style={style_info}>Te invitamos a conocer nuestro menú en la seccion "Comida" de la barra supereior, proximamente estaremos subiendo nueva informacion!</p>
        </>
    )
}

export default Principal 