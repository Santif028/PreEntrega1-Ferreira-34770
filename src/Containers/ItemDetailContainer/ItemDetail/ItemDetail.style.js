export const styles = {
    divDetail: {
        display: "grid",
        gridTemplateAreas:`"foto precio"
                            "descripcion descripcion"
                            `,
        gap: 50,
        margin: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    divDetail2:{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        gridArea: "precio",
        border: "solid 1px #C2C2C2",
        borderRadius: 7,
        padding: 15,
    },
    a:{
        display: "flex",
        justifyContent: "center",
        textDecoration: "none"
    },
    divDetail3:{
        gridArea: "descripcion",
        display: "flex",
        flexDirection: "column",
        gap: 20
    },  
    img: {
        gridArea: "foto",
        width: "50%",
        justifySelf: "center"
    },
    h1: {
        textAlign: "center",
        fontSize: "1.5rem"
    },
    h2: {
        textAlign: "center",
        fontSize: "1.5rem"
    },
    span: {
        fontSize: "1.5rem"
    },
    botonFinalizar: {
        display: "inline-block",
        outline: 0,
        cursor: "pointer",
        backgroundColor: "white",
        borderRadius: 4,
        padding:"8px 16px",
        fontSize: 16,
        fontWeight: 600,
        color: "rgb(43, 108, 176)",
        border: "1px solid rgb(66, 153, 225)",
    }
}