const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }

export const styles = {
    header: {
        display: "grid",
        gridTemplateAreas: `"titulo navbar carrito"`,
        backgroundColor: "#D92414",
        alignItems: "center",
    },
    h1:{
        gridArea: "titulo",
    },
    nav:{
        gridArea: "navbar",
        display: viewport.width > 900 ? "flex" : "none",
        justifyContent: "center",
    },
    navUl:{
        listStyle: "none",
        display: "flex",
        margin: 20,
        gap: 10,
    },
    navUlLi:{
        fontSize: 13,
    },
    anchors:{
        textDecoration: "none",
        color: "black",
    },
    divCarrito:{
        gridArea: "carrito",
        display: "flex",
        justifyContent: "center",
    },
};


