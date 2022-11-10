export const styles = {
    header: {
        display: "grid",
        gridTemplateAreas: `"titulo navbar carrito"`,
        backgroundColor: "rgb(66, 153, 225)",
        alignItems: "center",
    },
    h1:{
        gridArea: "titulo",
        fontSize: "2.5rem",
        textAlign: "center",
    },
    nav:{
        display: "flex",
        gridArea: "navbar",
        justifyContent: "center",
        textAlign: "center",
        gap: 20
    },
    anchors:{
        textDecoration: "none",
        color: "black",
        fontWeight: 600,
        fontSize: "1.2rem",
    },
    divCarrito:{
        gridArea: "carrito",
        display: "flex",
        justifyContent: "center",
    },
};


